import useParentPlatforms from "./useParentPlatforms";

const useParentPlatform = (id?: number | undefined) => {
  if (!id) return;

  const { data: platforms } = useParentPlatforms();
  return platforms?.results.find((platform) => platform.id === id);
};

export default useParentPlatform;
