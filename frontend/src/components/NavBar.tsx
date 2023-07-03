import { HStack, Icon, Link, Show, Text } from "@chakra-ui/react";
import { IoGameControllerOutline } from "react-icons/io5";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="1em">
      <Link display={"contents"} href="/">
        <Icon as={IoGameControllerOutline} boxSize={"2.5em"}></Icon>
        <Show above="sm">
          <Text>GameHub</Text>
        </Show>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
