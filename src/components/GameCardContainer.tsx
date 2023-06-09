import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        background: "white",
        color: "teal.500",
        cursor: "pointer",
        transform: "scale(1.04)",
        transition: "transform 0.5s cubic-bezier(.08,.52,.52,1)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
