import { Suspense } from "react";

import BackgroundImage from "@/components/home/BackgroundImage";
import FilterBar from "@/components/home/FilterBar";
import HeadLine from "@/components/home/HeadLine";
import ImageList from "@/components/home/ImageList";

export default async function HomePage() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-auto">
      <header className="flex-center hw-full snap-center flex-col">
        <Suspense>
          <BackgroundImage />
        </Suspense>
        <div className="flex-center flex-col rounded-xl bg-white p-12 opacity-85">
          <HeadLine />
          <Suspense>
            <FilterBar />
          </Suspense>
        </div>
      </header>
      <main
        id="main"
        className="flex-center hw-full snap-start flex-col bg-black"
      >
        <Suspense>
          <FilterBar />
        </Suspense>
        <Suspense>
          <ImageList />
        </Suspense>
      </main>
    </div>
  );
}
