import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({ error: 'YouTube API key not configured' }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');

  try {
    if (action === 'getChannelId') {
      const handle = searchParams.get('handle') ?? '';
      const res = await fetch(
        `${BASE}/channels?part=id&forHandle=${encodeURIComponent(handle)}&key=${API_KEY}`
      );
      const data = await res.json();
      const channelId = data.items?.[0]?.id ?? null;
      if (!channelId) return NextResponse.json({ error: 'Channel not found' }, { status: 404 });
      return NextResponse.json({ channelId });
    }

    if (action === 'getVideos') {
      const channelId = searchParams.get('channelId') ?? '';
      const maxResults = searchParams.get('maxResults') ?? '12';
      const pageToken = searchParams.get('pageToken') ?? '';
      const channelTitle = searchParams.get('channelTitle') ?? '';

      const url = new URL(`${BASE}/search`);
      url.searchParams.set('part', 'snippet');
      url.searchParams.set('channelId', channelId);
      url.searchParams.set('type', 'video');
      url.searchParams.set('order', 'date');
      url.searchParams.set('maxResults', maxResults);
      url.searchParams.set('key', API_KEY);
      if (pageToken) url.searchParams.set('pageToken', pageToken);

      const res = await fetch(url.toString());
      const data = await res.json();

      if (data.error) {
        return NextResponse.json({ error: data.error.message }, { status: data.error.code ?? 500 });
      }

      const items = data.items ?? [];

      // Fetch durations to filter out Shorts (≤60s)
      const ids = items.map((i: any) => i.id.videoId).join(',');
      const detailsRes = await fetch(
        `${BASE}/videos?part=contentDetails&id=${ids}&key=${API_KEY}`
      );
      const detailsData = await detailsRes.json();
      const durations = new Map<string, number>(
        (detailsData.items ?? []).map((i: any) => [i.id, parseDuration(i.contentDetails.duration)])
      );

      const videos = items
        .filter((item: any) => (durations.get(item.id.videoId) ?? 0) > 60)
        .map((item: any) => mapVideo(item, channelTitle));

      return NextResponse.json({ videos, nextPageToken: data.nextPageToken ?? null });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (err) {
    console.error('YouTube API error:', err);
    return NextResponse.json({ error: 'YouTube API request failed' }, { status: 500 });
  }
}
