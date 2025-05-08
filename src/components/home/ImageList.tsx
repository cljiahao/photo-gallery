"use client";

import { useSearchParams } from "next/navigation";

import { useImages } from "@/lib/google-photos";
import ImageCard from "./ImageCard";
import ImageCardSkeleton from "./ImageCardSkeleton";

export default function ImageList() {
  const { data: links, isLoading } = useImages();

  const searchParams = useSearchParams();

  const typeFilter = searchParams.get("type");

  // Filter the links based on the 'type' from the searchParams
  const filteredLinks = typeFilter
    ? links?.filter((link) => link.type === typeFilter)
    : links;

  return (
    <div className="no-scrollbar hw-full overflow-y-auto">
      {isLoading ? (
        <ImageCardSkeleton />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-5">
          {filteredLinks?.map((link) => (
            <ImageCard key={link.id + link.type} url={link.url} />
          ))}
        </div>
      )}
    </div>
  );
}
