import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Platform";
import ApiClient, { FetchResponse } from "../services/ApiClient";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const useParentPlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["parentPlatforms"],
    queryFn: apiClient.getAll,
  });

export default useParentPlatforms;
