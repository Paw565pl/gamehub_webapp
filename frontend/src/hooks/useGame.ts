import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import { Game } from "../entities/Game";

const useGame = (id: string | number) => {
  const apiClient = new ApiClient<Game>(`/games/${id}`);

  return useQuery<Game, Error>({
    queryKey: ["games", id],
    queryFn: apiClient.get,
  });
};

export default useGame;
