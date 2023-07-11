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

  const skeletons =
    useBreakpointValue({
      base: 1,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
    }) || 1;

  const scrollSkeletons = useMemo(
    () => [...Array(skeletons).keys()],
    [skeletons]
  );
  const loadingSkeletons = useMemo(
    () => [...Array(skeletons * 3).keys()],
    [skeletons]
  );

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
          {scrollSkeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        </SimpleGrid>
      }
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          loadingSkeletons.map((skeleton) => (
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
