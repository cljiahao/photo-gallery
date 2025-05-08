import { ImageListProps } from "@/lib/interfaces";
import { shuffleArray } from "@/lib/utils";

const album_links: { [id: string]: string } = {
  Nature: process.env.NEXT_PUBLIC_NATURE_ALBUM || "",
  Snow: process.env.NEXT_PUBLIC_SNOW_ALBUM || "",
  Urban: process.env.NEXT_PUBLIC_URBAN_ALBUM || "",
  Buildings: process.env.NEXT_PUBLIC_BUILDINGS_ALBUM || "",
};

async function fetchImages(): Promise<ImageListProps[]> {
  const albumEntries = Object.entries(album_links);

  const results = await Promise.all(
    albumEntries.map(async ([key, albumId]) => {
      const urls = await GoogleApis(albumId);
      return urls.map((item: string) => ({
        type: key,
        url: `https://lh3.googleusercontent.com/${item}=w1920-h1080`,
      }));
    }),
  );

  // Flatten the array of arrays and assign a unique ID
  const flatResults = results.flat().map((img, index) => ({
    id: index,
    ...img,
  }));
  return shuffleArray(flatResults);
}

async function GoogleApis(link: string) {
  const resp = await fetch(link, {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  });
  const html = await resp.text();
  const re = /pw\/AP1G[^"|=]*/g;
  const result = html.match(re) || [];
  const unique = Array.from(new Set(result));

  return unique;
}

export async function GET() {
  try {
    return Response.json(await fetchImages());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
