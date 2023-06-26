import { HStack, Icon, Link, Show, Text } from "@chakra-ui/react";
import { IoGameControllerOutline } from "react-icons/io5";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchSubmit: (searchQuery: string) => void;
}

const NavBar = ({ onSearchSubmit }: Props) => {
  return (
    <HStack padding="1em">
      <Link display={"contents"} href="/">
        <Icon as={IoGameControllerOutline} boxSize={"2.5em"}></Icon>
        <Show above="sm">
          <Text>GameHub</Text>
        </Show>
      </Link>
      <SearchInput
        onSearchSubmit={(searchQuery) => onSearchSubmit(searchQuery)}
      ></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
