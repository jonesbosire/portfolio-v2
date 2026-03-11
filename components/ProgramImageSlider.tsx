"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  tag: string;
  isActive: boolean;
  period: string;
}

export default function ProgramImageSlider({ images, title, tag, isActive, period }: Props) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative h-72 md:h-[480px] rounded-sm overflow-hidden mb-10 border border-outline group">
      {/* Images */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt={`${title} — photo ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
            unoptimized
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Nav arrows — only show if more than one image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-sm bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-sm bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/40"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Bottom badges */}
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 z-10">
        <span className={`tag ${isActive ? "" : "tag-white"}`}>{tag}</span>
        {isActive ? (
          <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-black/60 px-2 py-1 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Currently active
          </span>
        ) : (
          <span className="text-xs text-white/70 bg-black/60 px-2 py-1 rounded-sm">
            Completed · {period}
          </span>
        )}
        {images.length > 1 && (
          <span className="text-xs text-white/50 bg-black/40 px-2 py-1 rounded-sm">
            {current + 1} / {images.length}
          </span>
        )}
      </div>
    </div>
  );
}
