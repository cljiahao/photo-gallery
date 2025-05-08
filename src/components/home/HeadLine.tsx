import Link from "next/link";

export default function HeadLine() {
  return (
    <div className="flex-center flex-col gap-2">
      <h1 className="text-5xl font-bold">Photo Gallery</h1>
      <Link href="https://www.instagram.com/kelerence">@Kelerence</Link>
    </div>
  );
}
