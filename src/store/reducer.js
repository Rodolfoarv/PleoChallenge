export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_FAVORITE_LAUNCH_PADS":
      return {
        ...state,
        userFavoriteLaunchPads: [action.payload, ...state.userFavoriteLaunchPads],
      };
    case "REMOVE_ITEM_FROM_FAVORITE_LAUNCH_PADS":
      return {
        ...state,
        userFavoriteLaunchPads: state.userFavoriteLaunchPads.filter(
          (item) => item.site_id !== action.payload
        ),
      };
    case "ADD_ITEM_TO_FAVORITE_LAUNCHES":
      return {
        ...state,
        userFavoriteLaunches: [action.payload, ...state.userFavoriteLaunches],
      };
    case "REMOVE_ITEM_FROM_FAVORITE_LAUNCHES":
      return {
        ...state,
        userFavoriteLaunches: state.userFavoriteLaunches.filter(
          (item) => item.flight_number !== action.payload
        ),
      };
    default:
      return state;
  }
};
