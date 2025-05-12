import { Suspense } from "react";

import BackgroundImage from "@/components/home/BackgroundImage";
import FilterBar from "@/components/home/FilterBar";
import HeadLine from "@/components/home/HeadLine";
import ImageList from "@/components/home/ImageList";
import Spinner from "@/components/spinner";

export default async function HomePage() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-auto">
      <header className="flex-center hw-full snap-center flex-col">
        <Suspense fallback={<Spinner />}>
          <BackgroundImage />
        </Suspense>
        <div className="flex-center flex-col rounded-xl bg-white p-12 opacity-85">
          <HeadLine />
          <Suspense fallback={<Spinner />}>
            <FilterBar />
          </Suspense>
        </div>
      </header>
      <main
        id="main"
        className="flex-center hw-full snap-start flex-col bg-black"
      >
        <Suspense fallback={<Spinner />}>
          <FilterBar />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <ImageList />
        </Suspense>
      </main>
    </div>
  );
}
