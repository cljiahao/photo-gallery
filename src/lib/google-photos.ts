import { useQuery } from "@tanstack/react-query";
import { ImageListProps } from "./interfaces";

const fetchData = async () => {
  const res = await fetch("/api/proxy");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export const useImages = () =>
  useQuery<ImageListProps[]>({
    queryKey: ["images"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
