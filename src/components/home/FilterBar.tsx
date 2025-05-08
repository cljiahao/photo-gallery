"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useImages } from "@/lib/google-photos";

export default function FilterBar() {
  const { data: links, isLoading, isError } = useImages();

  const searchParams = useSearchParams();
  const router = useRouter();

  const uniqueTypes = [
    "All",
    ...new Set(links?.map((item) => item.type)),
  ].sort();

  const handleClick = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (type !== "All") {
      params.set("type", type);
    } else {
      params.delete("type");
    }

    const newUrl = `/?${params.toString()}#main`;

    // Check if the URL has changed before navigating
    if (window.location.href !== newUrl) {
      router.push(newUrl);
    }
  };

  if (isLoading) return null;

  return (
    <div className="flex-center h-18 gap-12 text-lg">
      {uniqueTypes.map((type) => (
        <Button key={type} onClick={() => handleClick(type)}>
          {type}
        </Button>
      ))}
    </div>
  );
}
