export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_FAVOURITE_LAUNCH_PADS":
      return {
        ...state,
        favouriteLaunchPads: [action.payload, ...state.favouriteLaunchPads],
      };
    default:
      return state;
  }
};
