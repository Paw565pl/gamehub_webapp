import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  //   const color = score > 75 ? "#66A329" : score > 50 ? "#826200" : "#CC0000";
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize={"sm"}
      paddingX={"0.5em"}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
