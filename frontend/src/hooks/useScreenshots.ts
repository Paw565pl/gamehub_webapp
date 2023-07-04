import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";
import ApiClient, { FetchResponse } from "../services/ApiClient";

const useScreenshots = (id: string | number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
