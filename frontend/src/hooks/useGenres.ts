import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/ApiClient";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

export default useGenres;
