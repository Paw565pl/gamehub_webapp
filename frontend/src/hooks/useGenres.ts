import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/ApiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

export default useGenres;
