"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useImages } from "@/lib/google-photos";
import ImageCard from "./ImageCard";

export default function ImageList() {
  const { data: links, isLoading, isError } = useImages();

  const searchParams = useSearchParams();
  const router = useRouter();

  const typeFilter = searchParams.get("type");

  // Filter the links based on the 'type' from the searchParams
  const filteredLinks = typeFilter
    ? links?.filter((link) => link.type === typeFilter)
    : links;

  return (
    <div className="no-scrollbar hw-full overflow-y-auto">
      <div className="grid grid-cols-5">
        {filteredLinks?.map((link) => (
          <ImageCard key={link.id + link.type} url={link.url} />
        ))}
      </div>
    </div>
  );
}
