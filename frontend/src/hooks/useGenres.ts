import { useQuery } from "@tanstack/react-query";
import Genre from "../entities/Genre";
import ApiClient, { FetchResponse } from "../services/ApiClient";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

export default useGenres;
