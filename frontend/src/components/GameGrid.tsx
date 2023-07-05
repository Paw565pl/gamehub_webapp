import { SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { Fragment, useMemo } from "react";
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

  const scrollSkeletons = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  });
  const skeletons = [...Array(12).keys()];

  const fetchedGamesCount = useMemo(
    () => games?.pages.reduce((acc, page) => acc + page.results.length, 0),
    [games]
  );

  return (
    <InfiniteScroll
      style={{
        overflow: "unset",
      }}
      dataLength={fetchedGamesCount || 0}
      hasMore={hasNextPage || false}
      next={() => fetchNextPage()}
      loader={
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
          marginTop={5}
        >
          {[...Array(scrollSkeletons).keys()].map((skeleton) => (
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
            <Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
