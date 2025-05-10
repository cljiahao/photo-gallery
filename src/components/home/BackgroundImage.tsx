"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useImages } from "@/lib/google-photos";

export default function BackgroundImage() {
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);

  const { data: links, isLoading } = useImages();

  useEffect(() => {
    if (!links || links.length === 0) return;

    const pickRandom = () => {
      setIsFading(true); // Start fade-out
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * links.length);
        setBackgroundUrl(links[randomIndex].url); // Change image
      }, 500); // Wait for fade-out duration

      // Reset fading state after image is updated
      setTimeout(() => setIsFading(false), 1000); // Wait for fade-in duration
    };

    pickRandom(); // Pick one initially
    const intervalId = setInterval(pickRandom, 20000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [links]);

  if (!backgroundUrl || isLoading) return null;

  return (
    <div className="hw-full absolute -z-1 bg-black">
      <Image
        className={`-z-1 object-cover transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
        src={backgroundUrl}
        alt={backgroundUrl}
        fill
        priority
      />
    </div>
  );
}
