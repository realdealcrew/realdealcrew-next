import { NextResponse } from 'next/server';
import { PodcastEpisode } from '@/lib/types';

const FEEDS = [
  { url: 'https://feeds.captivate.fm/realdealcast/', name: 'RealDealCast' },
  { url: 'https://feeds.captivate.fm/reimastermind/', name: 'REI Mastermind' },
];

function getTagText(xml: string, tag: string): string {
  const t = tag.replace(':', '\\:');
  const cdataRe = new RegExp(`<${t}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${t}>`, 'i');
  const cdataMatch = xml.match(cdataRe);
  if (cdataMatch) return cdataMatch[1].trim();

  const plainRe = new RegExp(`<${t}[^>]*>([\\s\\S]*?)<\\/${t}>`, 'i');
  const plainMatch = xml.match(plainRe);
  return plainMatch ? plainMatch[1].trim() : '';
}

function getAttr(xml: string, tag: string, attr: string): string {
  const t = tag.replace(':', '\\:');
  const re = new RegExp(`<${t}[^>]*\\s${attr}=["']([^"']*)["']`, 'i');
  const m = xml.match(re);
  return m ? m[1] : '';
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#\d+;/g, '');
}

function parseItems(xml: string, feedName: string): PodcastEpisode[] {
  const itemRe = /<item>([\s\S]*?)<\/item>/gi;
  const items: PodcastEpisode[] = [];
  let m: RegExpExecArray | null;

  while ((m = itemRe.exec(xml)) !== null) {
    const chunk = m[1];
    const title = decodeEntities(getTagText(chunk, 'title'));
    if (!title) continue;

    const audioUrl = getAttr(chunk, 'enclosure', 'url');
    if (!audioUrl) continue;

    const rawDesc =
      getTagText(chunk, 'description') || getTagText(chunk, 'itunes:summary');
    const description = decodeEntities(rawDesc.replace(/<[^>]+>/g, ''))
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 400);

    items.push({
      id: getTagText(chunk, 'guid') || `${feedName}-${items.length}`,
      title,
      description,
      publishedAt: getTagText(chunk, 'pubDate'),
      audioUrl,
      duration: getTagText(chunk, 'itunes:duration') || undefined,
      image: getAttr(chunk, 'itunes:image', 'href') || undefined,
      feedName,
    });
  }

  return items;
}

export async function GET() {
  try {
    const results = await Promise.allSettled(
      FEEDS.map(async ({ url, name }) => {
        const res = await fetch(url, {
          next: { revalidate: 3600 },
          headers: { 'User-Agent': 'RealDealCrew/1.0' },
        });
        if (!res.ok) throw new Error(`Feed ${name} returned ${res.status}`);
        const xml = await res.text();
        return parseItems(xml, name);
      })
    );

    const all: PodcastEpisode[] = results
      .filter(
        (r): r is PromiseFulfilledResult<PodcastEpisode[]> => r.status === 'fulfilled'
      )
      .flatMap((r) => r.value)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );

    return NextResponse.json({ episodes: all });
  } catch (err) {
    console.error('Podcast feed error:', err);
    return NextResponse.json({ error: 'Failed to fetch podcast feeds' }, { status: 500 });
  }
}
