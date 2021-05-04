import React, { useContext } from "react";
import { Heart } from "react-feather";
import {
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from "@chakra-ui/core";

import UserFavoriteLaunchesList from "./UserFavoriteLaunchesList";
import UserFavoriteLaunchPadsList from "./UserFavoriteLaunchPadsList";

const UserFavoriteListBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      
      <IconButton ref={btnRef} as={Heart} variant="link" onClick={onOpen} />
      <Drawer
        scrollBehavior={"inside"}
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your favorites</DrawerHeader>

          <DrawerBody overflow>
            <UserFavoriteLaunchPadsList />
            <UserFavoriteLaunchesList />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default UserFavoriteListBar;