import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient from "../services/ApiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      ApiClient.get("/games", {
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchQuery,
        },
      }).then((res) => res.data),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

export default useGames;
