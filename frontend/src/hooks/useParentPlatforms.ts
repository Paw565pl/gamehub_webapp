import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useParentPlatforms = () => useData<Platform>("/platforms/lists/parents");

export default useParentPlatforms;
