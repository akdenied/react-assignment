export const initialState = {
  isLoading: false,
  questions: [],
  error: null,
  question: {
    isLoading: false,
    data: {},
    error: null,
  },
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
    case QUESTION_CONSTANTS.GET_SINGLE_QUESTION_LOADING:
      return {
        ...state,
        question: {
          ...state.question,
          isLoading: payload,
        },
      };
    case QUESTION_CONSTANTS.GET_SINGLE_QUESTION:
      return {
        ...state,
        question: {
          ...state.question,
          isLoading: false,
          data: payload,
        },
      };
    case QUESTION_CONSTANTS.GET_SINGLE_QUESTION_FAIL:
      return {
        ...state,
        question: {
          ...state.question,
          isLoading: false,
          data: {},
          error: payload,
        },
      };

    default:
      return state;
  }
};

export const QUESTION_CONSTANTS = {
  LOADING: "LOADING",
  GET_QUESTION: "GET_QUESTION",
  GET_QUESTION_FAIL: "GET_QUESTION_FAIL",
  GET_SINGLE_QUESTION_LOADING: "GET_SINGLE_QUESTION_LOADING",
  GET_SINGLE_QUESTION: "GET_SINGLE_QUESTION",
  GET_SINGLE_QUESTION_FAIL: "GET_SINGLE_QUESTION_FAIL",
};
