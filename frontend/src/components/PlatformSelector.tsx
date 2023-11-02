import { useMemo } from "react";
import useParentPlatforms from "../hooks/useParentPlatforms";
import useGameQueryStore from "../store";
import SelectorMenu, { MenuItemType } from "./SelectorMenu";

const PlatformSelector = () => {
  const { data: platforms, error } = useParentPlatforms();

  const platformsMap = useMemo(
    () =>
      platforms?.results?.reduce(
        (acc, platform) => [
          ...acc,
          { value: platform.id, label: platform.name },
        ],
        [] as MenuItemType[],
      ),
    [platforms],
  );

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
      onClick={setSelectedPlatformId as (value: string | number) => void}
    ></SelectorMenu>
  );
};

export default PlatformSelector;
