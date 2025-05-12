import { Skeleton } from "@/components/ui/skeleton";

export default function ImageCardSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5">
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
      <Skeleton className="h-[500px] w-[1000px] rounded-xl" />
    </div>
  );
}
