"use client";

import { useState } from "react";
import { YouTubeVideo } from "@/lib/types";

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

export default function VideoCard({ video }: { video: YouTubeVideo }) {
  const [open, setOpen] = useState(false);
  const [thumbHovered, setThumbHovered] = useState(false);

  return (
    <>
      <div
        className="overflow-hidden rounded-sm"
        style={{
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        {/* Thumbnail */}
        <div
          className="aspect-video relative overflow-hidden cursor-pointer"
          style={{ display: "block" }}
          onClick={() => setOpen(true)}
          onMouseEnter={() => setThumbHovered(true)}
          onMouseLeave={() => setThumbHovered(false)}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
            style={{
              transform: thumbHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: "rgba(0,0,0,0.45)",
              opacity: thumbHovered ? 1 : 0,
              transition: "opacity 0.2s ease",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#c8f135",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M5 3.5l10 5.5-10 5.5V3.5z" fill="#000" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "1rem" }}>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#c8f135",
              display: "inline-block",
              marginBottom: "0.4rem",
              fontFamily: "monospace",
            }}
          >
            {video.channelTitle}
          </span>
          <h3
            className="line-clamp-2"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.01em",
              lineHeight: 1.4,
              marginBottom: "0.4rem",
            }}
          >
            {video.title}
          </h3>
          <p
            style={{
              fontSize: "0.7rem",
              color: "var(--color-text-muted)",
              marginBottom: "0.875rem",
            }}
          >
            {formatDate(video.publishedAt)}
          </p>
          <a
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.75rem",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Watch on YouTube
          </a>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "min(900px, 100%)",
              background: "#111",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #333",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                borderBottom: "1px solid #222",
              }}
            >
              <span
                className="line-clamp-2"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                  flex: 1,
                  paddingRight: "1rem",
                }}
              >
                {video.title}
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-text-muted)",
                  cursor: "pointer",
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  padding: "0.25rem",
                  flexShrink: 0,
                }}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
