"use client";

import { useRef, useState } from "react";

type Props = {
  /** filename inside /public/videos, or undefined to show placeholder */
  src?: string;
  /** poster image filename inside /public/images */
  poster?: string;
  label: string;
};

/**
 * Lightweight, lazy video player.
 * - Nothing loads until the user clicks play (preload="none").
 * - Shows a poster frame (or a themed placeholder if no video is set yet).
 * - No autoplay, so heavy media never blocks first paint.
 */
export function VideoPlayer({ src, poster, label }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const videoSrc = src ? `/videos/${src}` : undefined;
  const posterSrc = poster ? `/images/${poster}` : undefined;

  const play = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  // No video wired up yet → themed "drop a file here" placeholder.
  if (!videoSrc) {
    return (
      <div className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-line-strong bg-canvas">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="relative z-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-accent"
            >
              <path
                d="M8 5v14l11-7z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink-faint">
            demo — {label}
          </p>
          <p className="mt-1 font-mono text-[11px] text-ink-faint/70">
            coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-line bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        preload="none"
        controls={playing}
        playsInline
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          onClick={play}
          data-cursor="play"
          aria-label={`Play demo — ${label}`}
          className="group absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/50 bg-canvas/80 backdrop-blur transition-transform group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
