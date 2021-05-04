import React, { useContext } from "react";
import { GlobalContext } from "../store/globalState";
import { LaunchItem } from "./launches";

import {
  SimpleGrid,
  Text,
} from "@chakra-ui/core";

const UserFavoriteLaunchesList = () => {
  const { userFavoriteLaunches } = useContext(GlobalContext);
  return (
    <>
      <Text my={2} fontWeight="600">
        Your favorite launches ({userFavoriteLaunches.length})
      </Text>
      <SimpleGrid spacing={2}>
        {userFavoriteLaunches.length > 0 ? (
          userFavoriteLaunches.map((launch) => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))
        ) : (
          <Text fontSize="1em">Click on a star to add your favorite launch! :)</Text>
        )}
      </SimpleGrid>
    </>
  );
}

export default UserFavoriteLaunchesList;