import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/ApiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const useParentPlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["parentPlatforms"],
    queryFn: apiClient.getAll,
  });

export default useParentPlatforms;
