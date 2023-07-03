import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isSuccess,
  } = useGames();

  if (error) return <Text padding={"1em"}>{error.message}</Text>;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount = games?.pages.reduce(
    (acc, page) => acc + page.results.length,
    0
  );

  return (
    <Box padding="1em">
      <InfiniteScroll
        dataLength={fetchedGamesCount || 0}
        hasMore={hasNextPage || false}
        next={() => fetchNextPage()}
        loader={
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={5}
            marginTop={5}
          >
            {skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))}
          </SimpleGrid>
        }
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))}
          {isSuccess &&
            games?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
