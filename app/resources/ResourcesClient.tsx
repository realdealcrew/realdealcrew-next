"use client";

import { useState, useEffect, useCallback } from "react";
import VideoCard from "@/components/resources/VideoCard";
import PodcastEpisodeRow from "@/components/resources/PodcastEpisodeRow";
import { YouTubeVideo, PodcastEpisode } from "@/lib/types";

type Tab = "tech" | "interviews" | "podcast";

const CACHE_EXPIRY = 3600000;
const CACHE_VERSION = 'v3';
const CHANNELS: Record<"tech" | "interviews", { handle: string; label: string }> = {
  tech:       { handle: "@RealDealCast",  label: "Tech & Tools" },
  interviews: { handle: "@realdealchat", label: "Investor Interviews" },
};

interface ChannelState {
  videos: YouTubeVideo[];
  loading: boolean;
  error: string | null;
  nextPageToken: string | null;
  loadingMore: boolean;
  channelId: string | null;
}

const empty: ChannelState = {
  videos: [], loading: true, error: null,
  nextPageToken: null, loadingMore: false, channelId: null,
};

async function fetchChannelVideos(handle: string, channelTitle: string, pageToken?: string, channelId?: string) {
  let id = channelId;

  if (!id) {
    const r = await fetch(
      `/api/youtube?action=getChannelId&handle=${encodeURIComponent(handle.replace("@", ""))}`
    );
    const d = await r.json();
    if (d.error || !d.channelId) throw new Error(d.error ?? "Channel not found");
    id = d.channelId;
  }

  const params = new URLSearchParams({
    action: "getVideos",
    channelId: id!,
    maxResults: "12",
    channelTitle,
  });
  if (pageToken) params.set("pageToken", pageToken);

  const r = await fetch(`/api/youtube?${params}`);
  const d = await r.json();
  if (d.error) throw new Error(d.error);

  return { videos: d.videos as YouTubeVideo[], nextPageToken: d.nextPageToken as string | null, channelId: id! };
}

export default function ResourcesClient() {
  const [activeTab, setActiveTab] = useState<Tab>("tech");
  const [searchQuery, setSearchQuery] = useState("");
  const [tech, setTech] = useState<ChannelState>(empty);
  const [interviews, setInterviews] = useState<ChannelState>(empty);
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [podcastLoading, setPodcastLoading] = useState(true);
  const [podcastError, setPodcastError] = useState<string | null>(null);
  const [podcastVisible, setPodcastVisible] = useState(10);

  const loadChannel = useCallback(async (key: "tech" | "interviews") => {
    const { handle, label } = CHANNELS[key];
    const setter = key === "tech" ? setTech : setInterviews;
    const cacheKey = `yt_${CACHE_VERSION}_${handle}`;

    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const data = JSON.parse(cached);
        if (Date.now() - data.timestamp < CACHE_EXPIRY) {
          setter((s) => ({
            ...s,
            videos: data.videos,
            nextPageToken: data.nextPageToken,
            channelId: data.channelId,
            loading: false,
          }));
          return;
        }
        localStorage.removeItem(cacheKey);
      }
    } catch {
      localStorage.removeItem(`yt_${handle}`);
    }

    try {
      const { videos, nextPageToken, channelId } = await fetchChannelVideos(handle, label);
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ videos, nextPageToken, channelId, timestamp: Date.now() })
      );
      setter({ videos, loading: false, error: null, nextPageToken, loadingMore: false, channelId });
    } catch (err) {
      setter((s) => ({
        ...s,
        loading: false,
        error: err instanceof Error ? err.message : "Failed to load videos",
      }));
    }
  }, []);

  const loadMoreChannel = async (key: "tech" | "interviews") => {
    const state = key === "tech" ? tech : interviews;
    const setter = key === "tech" ? setTech : setInterviews;
    const { handle, label } = CHANNELS[key];
    if (!state.nextPageToken || state.loadingMore || !state.channelId) return;

    setter((s) => ({ ...s, loadingMore: true }));
    try {
      const { videos, nextPageToken } = await fetchChannelVideos(
        handle, label, state.nextPageToken, state.channelId
      );
      const all = [...state.videos, ...videos];
      const cacheKey = `yt_${CACHE_VERSION}_${handle}`;
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ videos: all, nextPageToken, channelId: state.channelId, timestamp: Date.now() })
      );
      setter((s) => ({ ...s, videos: all, nextPageToken, loadingMore: false }));
    } catch (err) {
      setter((s) => ({
        ...s,
        loadingMore: false,
        error: err instanceof Error ? err.message : "Failed to load more",
      }));
    }
  };

  useEffect(() => { loadChannel("tech"); }, [loadChannel]);
  useEffect(() => { loadChannel("interviews"); }, [loadChannel]);

  useEffect(() => {
    fetch("/api/podcast")
      .then((r) => r.json())
      .then(({ episodes: eps, error }) => {
        if (error) throw new Error(error);
        setEpisodes(eps ?? []);
      })
      .catch((err) => setPodcastError(err.message ?? "Failed to load podcast"))
      .finally(() => setPodcastLoading(false));
  }, []);

  const filterVideos = (videos: YouTubeVideo[]) => {
    if (!searchQuery.trim()) return videos;
    const q = searchQuery.toLowerCase();
    return videos.filter(
      (v) => v.title.toLowerCase().includes(q) || v.description.toLowerCase().includes(q)
    );
  };

  const filterEpisodes = (eps: PodcastEpisode[]) => {
    if (!searchQuery.trim()) return eps;
    const q = searchQuery.toLowerCase();
    return eps.filter(
      (e) => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)
    );
  };

  const filteredTech = filterVideos(tech.videos);
  const filteredInterviews = filterVideos(interviews.videos);
  const filteredEpisodes = filterEpisodes(episodes);

  const tabs: { id: Tab; label: string }[] = [
    { id: "tech", label: "Tech & Tools" },
    { id: "interviews", label: "Investor Interviews" },
    { id: "podcast", label: "Podcast" },
  ];

  return (
    <div>
      {/* Tab bar + search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "2.5rem",
          paddingBottom: "1.5rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "0.45rem 1rem",
                  fontSize: "0.8rem",
                  fontWeight: active ? 500 : 400,
                  border: `1px solid ${active ? "#c8f135" : "var(--color-border)"}`,
                  borderRadius: "4px",
                  background: active ? "rgba(200, 241, 53, 0.08)" : "transparent",
                  color: active ? "#c8f135" : "var(--color-text-secondary)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div style={{ marginLeft: "auto", position: "relative" }}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{
              position: "absolute",
              left: "0.6rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--color-text-muted)",
              pointerEvents: "none",
            }}
          >
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 10l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
              padding: "0.45rem 0.75rem 0.45rem 2rem",
              color: "var(--color-text-primary)",
              fontSize: "0.8rem",
              width: "200px",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Tech & Tools */}
      {activeTab === "tech" && (
        <div>
          {tech.loading && <LoadingGrid />}
          {tech.error && <ErrorMessage message={tech.error} />}
          {!tech.loading && !tech.error && filteredTech.length === 0 && (
            <EmptyState message={searchQuery ? `No results for "${searchQuery}"` : "No videos yet."} />
          )}
          {!tech.loading && !tech.error && filteredTech.length > 0 && (
            <>
              <div className="grid md:grid-cols-3 gap-6">
                {filteredTech.map((v) => <VideoCard key={v.id} video={v} />)}
              </div>
              {tech.nextPageToken && !searchQuery && (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <LoadMoreButton
                    onClick={() => loadMoreChannel("tech")}
                    loading={tech.loadingMore}
                    count={tech.videos.length}
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Investor Interviews */}
      {activeTab === "interviews" && (
        <div>
          {interviews.loading && <LoadingGrid />}
          {interviews.error && <ErrorMessage message={interviews.error} />}
          {!interviews.loading && !interviews.error && filteredInterviews.length === 0 && (
            <EmptyState message={searchQuery ? `No results for "${searchQuery}"` : "No videos yet."} />
          )}
          {!interviews.loading && !interviews.error && filteredInterviews.length > 0 && (
            <>
              <div className="grid md:grid-cols-3 gap-6">
                {filteredInterviews.map((v) => <VideoCard key={v.id} video={v} />)}
              </div>
              {interviews.nextPageToken && !searchQuery && (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <LoadMoreButton
                    onClick={() => loadMoreChannel("interviews")}
                    loading={interviews.loadingMore}
                    count={interviews.videos.length}
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Podcast */}
      {activeTab === "podcast" && (
        <div>
          {podcastLoading && <PodcastSkeleton />}
          {podcastError && <ErrorMessage message={podcastError} />}
          {!podcastLoading && !podcastError && filteredEpisodes.length === 0 && (
            <EmptyState message={searchQuery ? `No results for "${searchQuery}"` : "No episodes yet."} />
          )}
          {!podcastLoading && !podcastError && filteredEpisodes.length > 0 && (
            <>
              <div>
                {filteredEpisodes.slice(0, podcastVisible).map((ep) => (
                  <PodcastEpisodeRow key={ep.id} episode={ep} />
                ))}
              </div>
              {podcastVisible < filteredEpisodes.length && (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <LoadMoreButton
                    onClick={() => setPodcastVisible((n) => n + 10)}
                    loading={false}
                    count={podcastVisible}
                    label="Load More Episodes"
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function LoadingGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{ border: "1px solid var(--color-border)", borderRadius: "4px", overflow: "hidden" }}>
          <div
            className="aspect-video"
            style={{ background: "var(--color-surface)", animation: "pulse 1.5s ease-in-out infinite" }}
          />
          <div style={{ padding: "1rem" }}>
            <div style={{ height: "10px", width: "40%", background: "var(--color-border)", borderRadius: "2px", marginBottom: "0.5rem" }} />
            <div style={{ height: "14px", width: "90%", background: "var(--color-border)", borderRadius: "2px", marginBottom: "0.25rem" }} />
            <div style={{ height: "14px", width: "70%", background: "var(--color-border)", borderRadius: "2px" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function PodcastSkeleton() {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1.25rem 0",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div style={{ width: "80px", height: "80px", background: "var(--color-border)", borderRadius: "4px", flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ height: "10px", width: "30%", background: "var(--color-border)", borderRadius: "2px", marginBottom: "0.5rem" }} />
            <div style={{ height: "14px", width: "80%", background: "var(--color-border)", borderRadius: "2px", marginBottom: "0.25rem" }} />
            <div style={{ height: "14px", width: "60%", background: "var(--color-border)", borderRadius: "2px" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div style={{ padding: "3rem 0", textAlign: "center" }}>
      <p style={{ color: "var(--color-text-secondary)", fontSize: "0.875rem" }}>
        {message}
      </p>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div style={{ padding: "3rem 0", textAlign: "center" }}>
      <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>{message}</p>
    </div>
  );
}

function LoadMoreButton({
  onClick,
  loading,
  count,
  label,
}: {
  onClick: () => void;
  loading: boolean;
  count: number;
  label?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        padding: "0.6rem 1.5rem",
        fontSize: "0.8rem",
        border: "1px solid var(--color-border)",
        borderRadius: "4px",
        background: "transparent",
        color: loading ? "var(--color-text-muted)" : "var(--color-text-secondary)",
        cursor: loading ? "not-allowed" : "pointer",
        transition: "all 0.15s",
      }}
    >
      {loading ? "Loading..." : label ?? `Load More Videos (${count} shown)`}
    </button>
  );
}
