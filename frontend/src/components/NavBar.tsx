import { HStack, Icon, Show, Text } from "@chakra-ui/react";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="1em">
      <Link style={{ display: "contents" }} to="/">
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
