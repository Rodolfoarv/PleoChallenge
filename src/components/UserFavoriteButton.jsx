import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/core";
import { Star } from "react-feather";

const FavoriteButton = () => {

  const setFavorite = () => {
    console.log('clicked');
  }

  return (
    <>
      <IconButton
        onClick={(event) => setFavorite()}
        as={Star}
        variant="solid"
        size="md"
        stroke="#ECD94B"
        style = {{fill: "none"}}
      />
    </>
  )

}

export default FavoriteButton;


