import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeloton = () => {
  return (
    <Card
      _hover={{
        background: "white",
        color: "teal.500",
        cursor: "pointer",
        transform: "scale(1.2)",
        transition: "transform 0.8s ease-in",
      }}
    >
      <Skeleton height={"300px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeloton;
