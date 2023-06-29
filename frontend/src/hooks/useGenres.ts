import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => ApiClient.get<Genre[]>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGenres;
