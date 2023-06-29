import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient from "../services/ApiClient";
import { Platform } from "./useParentPlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchQuery,
        },
      }),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

export default useGames;
