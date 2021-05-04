import React, {createContext, useReducer, useEffect} from "react";
import Reducer from "./reducer";

/* Setup the initial state of the context, local storage
will be used to keep track of the favorite items of the users

*/
const initialState = {
  userFavoriteLaunches: localStorage.getItem("userFavoriteLaunches")
  ? JSON.parse(localStorage.getItem("userFavoriteLaunches"))
  : [],
  userFavoriteLaunchPads: localStorage.getItem("userFavoriteLaunchPads")
    ? JSON.parse(localStorage.getItem("userFavoriteLaunchPads"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "userFavoriteLaunches",
      JSON.stringify(state.userFavoriteLaunches)
    );
    localStorage.setItem(
      "userFavoriteLaunchPads",
       JSON.stringify(state.userFavoriteLaunchPads)
    );
  }, [state]);

  const addItemToFavoriteLaunchPads = (item) => {
    dispatch({ type: "ADD_ITEM_TO_FAVORITE_LAUNCH_PADS", payload: item });
  }

  const removeItemFromFavoriteLaunchPads = (item) => {
    dispatch({ type: "REMOVE_ITEM_FROM_FAVORITE_LAUNCH_PADS", payload: item.site_id });
  };

  const addItemToFavoriteLaunches = (item) => {
    dispatch({ type: "ADD_ITEM_TO_FAVORITE_LAUNCHES", payload: item });
  };

  const removeItemFromFavoriteLaunches = (item) => {
    dispatch({
      type: "REMOVE_ITEM_FROM_FAVORITE_LAUNCHES",
      payload: item.flight_number,
    });
  };

  return (
    <GlobalContext.Provider
      value = {{
        userFavoriteLaunchPads: state.userFavoriteLaunchPads,
        userFavoriteLaunches: state.userFavoriteLaunches,
        addItemToFavoriteLaunchPads,
        removeItemFromFavoriteLaunchPads,
        addItemToFavoriteLaunches,
        removeItemFromFavoriteLaunches
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
