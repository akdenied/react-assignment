export const initialState = {
  isLoading: false,
  statistics: {},
  error: null,
};

export const userReducer = (state, { type, payload }) => {
  console.log("🚀 ~ file: reducer.js:8 ~ userReducer ~ type:", type);
  switch (type) {
    case USER_CONSTANTS.LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case USER_CONSTANTS.GET_STATISTICS:
      return {
        ...state,
        isLoading: false,
        statistics: payload,
      };
    case USER_CONSTANTS.GET_STATISTICS_FAIL:
      return {
        ...state,
        isLoading: false,
        statistics: {},
        error: payload,
      };

    default:
      return state;
  }
};

export const USER_CONSTANTS = {
  LOADING: "LOADING",
  GET_STATISTICS: "GET_STATISTICS",
  GET_STATISTICS_FAIL: "GET_STATISTICS_FAIL",
};
