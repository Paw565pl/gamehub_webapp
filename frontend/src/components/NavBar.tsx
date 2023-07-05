import { HStack, Icon, Show, Text } from "@chakra-ui/react";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreList from "./GenreList";
import SearchInput from "./SearchInput";
import SideBar from "./SideBar";

const NavBar = () => {
  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
  const currPath = useLocation().pathname;

  return (
    <HStack marginBottom={"1em"}>
      {currPath === "/" && (
        <Show below="lg">
          <SideBar>
            <GenreList></GenreList>
          </SideBar>
        </Show>
      )}
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
