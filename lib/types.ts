export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelTitle: string;
  videoUrl: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  audioUrl: string;
  duration?: string;
  image?: string;
  feedName?: string;
}
