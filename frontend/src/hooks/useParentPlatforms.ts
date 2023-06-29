import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useParentPlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["parentPlatforms"],
    queryFn: () =>
      ApiClient.get<Platform[]>("/platforms/lists/parents").then(
        (res) => res.data
      ),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useParentPlatforms;
