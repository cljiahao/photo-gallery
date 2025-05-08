import { Skeleton } from "@/components/ui/skeleton";

export default function ImageCardSkeleton() {
  return (
    <div className="grid grid-cols-5">
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[1000px] w-[1000px] rounded-xl" />
    </div>
  );
}
