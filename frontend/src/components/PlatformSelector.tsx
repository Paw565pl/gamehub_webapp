import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useParentPlatform from "../hooks/useParentPlatform";
import useParentPlatforms from "../hooks/useParentPlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data: platforms, error, isSuccess } = useParentPlatforms();

  const selectedPlarformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatformName = useParentPlatform(selectedPlarformId)?.name;

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <Box marginRight={[0, 5]} paddingBottom={[2]}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} width={["100%"]}>
          {selectedPlatformName || "Platforms"}
        </MenuButton>
        <MenuList>
          {isSuccess &&
            platforms?.results.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => {
                  setSelectedPlatformId(platform.id);
                }}
              >
                {platform.name}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
