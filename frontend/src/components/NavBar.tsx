import { HStack, Icon, Show, Text } from "@chakra-ui/react";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);

  return (
    <HStack marginBottom={"1em"}>
      <Link
        onClick={() => resetGameQuery()}
        style={{ display: "contents" }}
        to="/"
      >
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
