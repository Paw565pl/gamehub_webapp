import { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useParentPlatforms from "../hooks/useParentPlatforms";

interface Props {
  onSelectPlatform: (platformId: number | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const [selectedPlatformName, setSelectedPlatformName] = useState<
    string | null
  >(null);
  const { data: platforms, error, isSuccess } = useParentPlatforms();

  if (error) return null;
  return (
    <Box marginRight={[0, 5]} paddingBottom={[2]}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} width={["100%"]}>
          {selectedPlatformName !== null ? selectedPlatformName : "Platforms"}
        </MenuButton>
        <MenuList>
          {isSuccess &&
            platforms?.results.map((platform) => (
              <MenuItem
                key={platform.id}
                onClick={() => {
                  onSelectPlatform(platform.id);
                  setSelectedPlatformName(platform.name);
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
