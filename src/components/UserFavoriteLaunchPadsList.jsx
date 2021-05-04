import React, { useContext } from "react";
import { GlobalContext } from "../store/globalState";
import LaunchPadItem from "./LaunchPadItem";
import {
  SimpleGrid,
  Text,
} from "@chakra-ui/core";

const UserFavoriteLaunchPadsList = () => {
  const { userFavoriteLaunchPads } = useContext(GlobalContext);
  console.log(userFavoriteLaunchPads);
  return (
    <>
      <Text my={2} fontWeight="600">
        Your favorite Launch pads ({userFavoriteLaunchPads.length})
      </Text>
      <SimpleGrid spacing={2}>
        {userFavoriteLaunchPads.length > 0 ? (
          userFavoriteLaunchPads.map((launchPad) => (
            <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
          ))
        ) : (
          <Text fontSize="1em">Click on a star to add your favorite launch pad! :) </Text>
        )}
      </SimpleGrid>
    </>
  );
}

export default UserFavoriteLaunchPadsList;