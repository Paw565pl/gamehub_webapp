import useParentPlatforms from "../hooks/useParentPlatforms";
import useGameQueryStore from "../store";
import SelectorMenu, { MenuItemType } from "./SelectorMenu";

const PlatformSelector = () => {
  const { data: platforms, error } = useParentPlatforms();
  const platformsMap = platforms?.results.reduce(
    (acc, platform) => [...acc, { value: platform.id, label: platform.name }],
    [] as MenuItemType[]
  );

  // TODO: usememo

  const selectedPlarformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatformName =
    platformsMap?.find((platform) => platform.value === selectedPlarformId)
      ?.label || "Platforms";

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <SelectorMenu
      activeLabel={selectedPlatformName}
      items={platformsMap}
      onClick={setSelectedPlatformId}
    ></SelectorMenu>
  );
};

export default PlatformSelector;
