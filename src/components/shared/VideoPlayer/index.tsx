"use client";

import { cn } from "@/lib/utils";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  className?: string;
};

export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  return (
    <video
      className={cn("w-full rounded-xl", className)}
      controls
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
