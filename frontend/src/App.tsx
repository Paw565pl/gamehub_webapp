import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
// TODO: add image skeletons for game card and genre list
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"5"}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={4} marginBottom={5}>
          <GameHeading></GameHeading>
          <Flex paddingTop={2} flexDirection={["column", "row"]}>
            <PlatformSelector></PlatformSelector>
            <SortSelector></SortSelector>
          </Flex>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
