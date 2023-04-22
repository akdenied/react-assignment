export const initialState = {
  isLoading: false,
  submission: {},
  error: null,
};

export const questionReducer = (state, { type, payload }) => {
  switch (type) {
    case SUBMISSION_CONSTANTS.LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SUBMISSION_CONSTANTS.GET_SUBMISSION:
      return {
        ...state,
        isLoading: false,
        submission: payload,
      };
    case SUBMISSION_CONSTANTS.GET_SUBMISSION_FAIL:
      return {
        ...state,
        isLoading: false,
        submission: {},
        error: payload,
      };

    default:
      return state;
  }
};

export const SUBMISSION_CONSTANTS = {
  LOADING: "LOADING",
  GET_SUBMISSION: "GET_SUBMISSION",
  GET_SUBMISSION_FAIL: "GET_SUBMISSION_FAIL",
};
