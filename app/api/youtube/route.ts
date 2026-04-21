import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';

const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE = 'https://www.googleapis.com/youtube/v3';

function mapVideo(item: any, channelTitle: string) {
  return {
    id: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail:
      item.snippet.thumbnails?.high?.url ??
      item.snippet.thumbnails?.medium?.url ??
      '',
    publishedAt: item.snippet.publishedAt,
    channelTitle,
    videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  };
}

function parseDuration(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (parseInt(m[1] ?? '0') * 3600) + (parseInt(m[2] ?? '0') * 60) + parseInt(m[3] ?? '0');
}

const getChannelId = unstable_cache(
  async (handle: string) => {
    const res = await fetch(
      `${BASE}/channels?part=id&forHandle=${encodeURIComponent(handle)}&key=${API_KEY}`
    );
    const data = await res.json();
    return (data.items?.[0]?.id ?? null) as string | null;
  },
  ['yt-channel-id'],
  { revalidate: 86400 } // channel IDs change rarely
);

const getVideosPage = unstable_cache(
  async (channelId: string, maxResults: string, pageToken: string, channelTitle: string) => {
    const url = new URL(`${BASE}/search`);
    url.searchParams.set('part', 'snippet');
    url.searchParams.set('channelId', channelId);
    url.searchParams.set('type', 'video');
    url.searchParams.set('order', 'date');
    url.searchParams.set('maxResults', maxResults);
    url.searchParams.set('key', API_KEY!);
    if (pageToken) url.searchParams.set('pageToken', pageToken);

    const res = await fetch(url.toString());
    const data = await res.json();

    if (data.error) throw new Error(data.error.message);

    const items = data.items ?? [];
    if (!items.length) return { videos: [], nextPageToken: null };

    // Fetch durations to filter out videos under 4 minutes
    const ids = items.map((i: any) => i.id.videoId).join(',');
    const detailsRes = await fetch(
      `${BASE}/videos?part=contentDetails&id=${ids}&key=${API_KEY}`
    );
    const detailsData = await detailsRes.json();
    const durations = new Map<string, number>(
      (detailsData.items ?? []).map((i: any) => [i.id, parseDuration(i.contentDetails.duration)])
    );

    const videos = items
      .filter((item: any) => (durations.get(item.id.videoId) ?? 0) > 240)
      .map((item: any) => mapVideo(item, channelTitle));

    return { videos, nextPageToken: (data.nextPageToken ?? null) as string | null };
  },
  ['yt-videos'],
  { revalidate: 3600 } // refresh feed every hour
);

export async function GET(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({ error: 'YouTube API key not configured' }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    if (action === 'getChannelId') {
      const handle = searchParams.get('handle') ?? '';
      const channelId = await getChannelId(handle);
      if (!channelId) return NextResponse.json({ error: 'Channel not found' }, { status: 404 });
      return NextResponse.json({ channelId });
    }

    if (action === 'getVideos') {
      const channelId = searchParams.get('channelId') ?? '';
      const maxResults = searchParams.get('maxResults') ?? '50';
      const pageToken = searchParams.get('pageToken') ?? '';
      const channelTitle = searchParams.get('channelTitle') ?? '';

      const result = await getVideosPage(channelId, maxResults, pageToken, channelTitle);
      return NextResponse.json(result);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (err) {
    console.error('YouTube API error:', err);
    return NextResponse.json({ error: 'YouTube API request failed' }, { status: 500 });
  }
}
