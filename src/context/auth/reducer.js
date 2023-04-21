export const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  token: null,
  error: null,
};

export const authReducer = (state, { type, payload }) => {
  console.log("🚀 ~ file: reducer.js:10 ~ authReducer ~ type:", type);
  switch (type) {
    case AUTH_CONSTANTS.LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case AUTH_CONSTANTS.LOGIN:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload.user,
        token: payload.token,
      };
    case AUTH_CONSTANTS.GET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload.user,
      };
    case AUTH_CONSTANTS.GET_CURRENT_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
        token: null,
      };
    case AUTH_CONSTANTS.LOG_OUT:
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};

export const AUTH_CONSTANTS = {
  LOADING: "LOADING",
  LOGIN: "LOGIN",
  LOG_OUT: "LOG_OUT",
  GET_CURRENT_USER: "GET_CURRENT_USER",
  GET_CURRENT_USER_FAIL: "GET_CURRENT_USER_FAIL",
};
