import BackgroundImage from "@/components/home/BackgroundImage";
import FilterBar from "@/components/home/FilterBar";
import HeadLine from "@/components/home/HeadLine";
import ImageList from "@/components/home/ImageList";
import { useImages } from "@/lib/google-photos";

export default async function HomePage() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-auto">
      <header className="flex-center hw-full snap-center flex-col">
        <BackgroundImage />
        <div className="flex-center flex-col rounded-xl bg-slate-50 p-12 opacity-85">
          <HeadLine />
          <FilterBar />
        </div>
      </header>
      <main
        id="main"
        className="flex-center hw-full snap-start flex-col bg-slate-300"
      >
        <FilterBar />
        <ImageList />
      </main>
    </div>
  );
}
