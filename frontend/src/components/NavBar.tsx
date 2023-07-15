import { HStack, Icon, Show, Text } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreList from "./GenreList";
import SearchInput from "./SearchInput";

const SideBar = lazy(() => import("./SideBar"));

const NavBar = () => {
  const resetGameQuery = useGameQueryStore((s) => s.resetGameQuery);
  const currPath = useLocation().pathname;

  return (
    <HStack marginBottom={"1em"}>
      {currPath === "/" && (
        <Show below="lg">
          <Suspense fallback={<Icon as={SlMenu} boxSize={"1.5em"}></Icon>}>
            <SideBar>
              <GenreList></GenreList>
            </SideBar>
          </Suspense>
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
