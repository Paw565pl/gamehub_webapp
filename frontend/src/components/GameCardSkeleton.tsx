import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card height={"99%"}>
      <Skeleton aspectRatio={1.5 / 1}></Skeleton>
      <CardBody>
        <SkeletonText padding={"1em"}></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
