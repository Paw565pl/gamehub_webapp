import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import ApiClient, { FetchResponse } from "../services/ApiClient";

const useTrailers = (id: string | number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${id}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", id],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
