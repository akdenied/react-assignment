export const initialState = {
  isLoading: false,
  questions: [],
  error: null,
};

export const questionReducer = (state, { type, payload }) => {
  switch (type) {
    case QUESTION_CONSTANTS.LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case QUESTION_CONSTANTS.GET_QUESTION:
      return {
        ...state,
        isLoading: false,
        questions: payload,
      };
    case QUESTION_CONSTANTS.GET_QUESTION_FAIL:
      return {
        ...state,
        isLoading: false,
        questions: [],
        error: payload,
      };

    default:
      return state;
  }
};

export const QUESTION_CONSTANTS = {
  LOADING: "LOADING",
  GET_QUESTION: "GET_QUESTION",
  GET_QUESTION_FAIL: "GET_QUESTION_FAIL",
};
