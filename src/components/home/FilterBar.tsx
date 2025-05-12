"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useImages } from "@/lib/google-photos";

export default function FilterBar() {
  const { data: links, isLoading } = useImages();

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
    <div className="flex-center h-18 gap-2 md:h-24 md:flex-row md:gap-10 md:pt-4">
      {uniqueTypes.map((type) => (
        <Button
          className="border-2 border-slate-300 bg-slate-50 p-2 text-xs hover:border-sky-200 hover:bg-sky-100 hover:underline md:p-4 md:text-lg"
          key={type}
          onClick={() => handleClick(type)}
        >
          {type}
        </Button>
      ))}
    </div>
  );
}
