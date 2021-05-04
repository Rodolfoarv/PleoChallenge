import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/core";
import { Star } from "react-feather";
import { GlobalContext } from "../store/globalState";

const UserFavoriteButton = ({type, item, id}) => {

  const {
    addItemToFavoriteLaunchPads,
    removeItemFromFavoriteLaunchPads,
    favoriteLaunchPads,
    addItemToFavoriteLaunches,
    removeItemFromFavoriteLaunches,
    userFavoriteLaunchPads,
    userFavoriteLaunches,
  } = useContext(GlobalContext);



  const setFavorite = (event, type, item) => {
    event.preventDefault(); //prevents from loading the next 
    if (type === "LaunchPad") handleFavoriteLaunchPad(item);
    else if (type === "Launch") handleFavoriteLaunch(item);
    else console.error(`Could not find type ${type}`);
  }

  const handleFavoriteLaunchPad = (item) => {
    !storedItem?
      addItemToFavoriteLaunchPads(item):
      removeItemFromFavoriteLaunchPads(item);
  }

  const handleFavoriteLaunch = () => {
    !storedItem?
      addItemToFavoriteLaunches(item):
      removeItemFromFavoriteLaunches(item);
  }

  let storedItem =
  userFavoriteLaunches.find((i) => i.site_id === id) ||
  userFavoriteLaunchPads.find((i) => i.flight_number === id);
  const isFavoriteFilled = storedItem ? true : false;

  return (
    <>
      <IconButton
        onClick={(event) => setFavorite(event, type, item)}
        as={Star}
        variant="solid"
        size="md"
        stroke="#ECD94B"
        style = {{fill: "none"}}
      />
    </>
  )

}

export default UserFavoriteButton;


