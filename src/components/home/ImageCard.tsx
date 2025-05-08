import Image from "next/image";

interface ImageCardProps {
  url: string;
}

export default function ImageCard({ url }: ImageCardProps) {
  return (
    <Image
      src={url}
      alt={url}
      height={1000}
      width={1000}
      className="h-56 object-none p-1 hover:object-cover hover:p-0 md:h-64"
    />
  );
}
