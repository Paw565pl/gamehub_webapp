import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: string | number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (error || isLoading) return null;

  const first = trailers?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailer;
