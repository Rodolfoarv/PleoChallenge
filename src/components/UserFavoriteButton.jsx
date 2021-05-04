import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/core";
import { Star } from "react-feather";
import { GlobalContext } from "../store/globalState";

const UserFavoriteButton = ({type, item, id}) => {

  const {
    addItemToFavoriteLaunchPads,
    removeItemFromFavoriteLaunchPads,
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
  userFavoriteLaunchPads.find((launchPad) => launchPad.site_id === id) 
  || userFavoriteLaunches.find((launch) => launch.flight_number === id);
  const isFavorite = storedItem ? true : false;

 
  return (
    <>
      <IconButton
        onClick={(event) => setFavorite(event, type, item)}
        as={Star}
        variant="solid"
        size="md"
        stroke="#ECD97B"
        style={isFavorite ? { fill: "#ECD97B" } : { fill: "none" }}
      />
    </>
  )

}

export default UserFavoriteButton;


