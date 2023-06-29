import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const useParentPlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["parentPlatforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useParentPlatforms;
