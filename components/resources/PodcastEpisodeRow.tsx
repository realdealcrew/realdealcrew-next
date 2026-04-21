"use client";

import { PodcastEpisode } from "@/lib/types";

function formatDate(str: string) {
  try {
    return new Date(str).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return str;
  }
}

export default function PodcastEpisodeRow({ episode }: { episode: PodcastEpisode }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "flex-start",
        padding: "1.25rem 0",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {episode.image && (
        <img
          src={episode.image}
          alt={episode.title}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "4px",
            flexShrink: 0,
          }}
        />
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.35rem",
            flexWrap: "wrap",
          }}
        >
          {episode.feedName && (
            <span
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#c8f135",
                fontFamily: "monospace",
              }}
            >
              {episode.feedName}
            </span>
          )}
          <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>
            {formatDate(episode.publishedAt)}
          </span>
          {episode.duration && (
            <span style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>
              · {episode.duration}
            </span>
          )}
        </div>
        <h3
          style={{
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
            marginBottom: "0.4rem",
          }}
        >
          {episode.title}
        </h3>
        {episode.description && (
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              marginBottom: "0.75rem",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {episode.description}
          </p>
        )}
        {episode.audioUrl && (
          <audio
            controls
            preload="none"
            src={episode.audioUrl}
            style={{ width: "100%", maxWidth: "480px", height: "36px" }}
          />
        )}
      </div>
    </div>
  );
}
