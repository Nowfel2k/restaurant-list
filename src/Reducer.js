export const initialState = {
  banners: null,
  rests: null, // restaurants
};

export const actionTypes = {
  SET_BANNERS: "SET_BANNERS",
  SET_RESTS: "SET_RESTS",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_BANNERS:
      return {
        ...state,
        banners: action.banners,
      };

    case actionTypes.SET_RESTS:
      return {
        ...state,
        rests: action.rests,
      };

    default:
      return state;
  }
};

export default reducer;
