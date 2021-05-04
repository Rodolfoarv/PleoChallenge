import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/core";
import { Star } from "react-feather";

const FavoriteButton = () => {
  return (
    <>
      <IconButton
        as={Star}
      />
    </>
  )

}

export default FavoriteButton;


