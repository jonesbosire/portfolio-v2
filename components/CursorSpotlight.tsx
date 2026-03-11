"use client";

import { useEffect } from "react";

export default function CursorSpotlight() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null; // Spotlight rendered via CSS ::before on body
}
