import { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchQuery: string;
}

const App = () => {
  // const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null)
  // const [selectedPlatformId, setSelectedPlatformId] = useState<number | null>(null)

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearchSubmit={(searchQuery) =>
            setGameQuery({ ...gameQuery, searchQuery: searchQuery })
          }
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={"5"}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(selectedGenreId) =>
              setGameQuery({ ...gameQuery, genreId: selectedGenreId })
            }
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={4} marginBottom={5}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <Flex paddingTop={2} flexDirection={["column", "row"]}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(selectedPlatformId) =>
                setGameQuery({ ...gameQuery, platformId: selectedPlatformId })
              }
            ></PlatformSelector>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder: sortOrder })
              }
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
