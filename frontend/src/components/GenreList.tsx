import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/ImageUrl";

interface Props {
  selectedGenreId?: number;
  onSelectGenre: (genreId: number) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading, isSuccess } = useGenres();

  return (
    <>
      {error && null}
      {isLoading && <Spinner></Spinner>}
      <List>
        {isSuccess &&
          genres?.results.map((genre) => (
            <ListItem paddingY={"0.3em"} key={genre.id}>
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  onClick={() => onSelectGenre(genre.id)}
                  fontSize={"lg"}
                  variant={"link"}
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
