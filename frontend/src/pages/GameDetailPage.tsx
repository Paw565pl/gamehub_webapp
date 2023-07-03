import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();

  return <div>GameDetailPage</div>;
};

export default GameDetailPage;
