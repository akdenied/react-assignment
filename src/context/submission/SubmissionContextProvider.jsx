import { createContext, useContext, useEffect, useReducer } from "react";
import { getQuestionList, getSingleQuestion } from "../../actions/questions";
import Loader from "../../components/common/loader/Loader";
import { ALERT_TYPE, AlertContext } from "../alert/AlertContextProvider";
import { AuthContext } from "../auth/AuthContextProvider";
import { SUBMISSION_CONSTANTS, initialState, questionReducer } from "./reducer";

export const SubmissionContext = createContext(null);

export const SubmissionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);
  console.log(
    "🚀 ~ file: SubmissionContextProvider.jsx:12 ~ SubmissionContextProvider ~ state:",
    state
  );

  const {
    state: { isLoading, isAuthenticated },
  } = useContext(AuthContext);

  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (!isLoading && isAuthenticated) handleGetQuestionsList();
  }, []);

  const handleGetQuestionsList = async () => {
    try {
      dispatch({
        type: SUBMISSION_CONSTANTS.LOADING,
        payload: true,
      });

      const res = await getQuestionList();
      dispatch({
        type: SUBMISSION_CONSTANTS.GET_SUBMISSION,
        payload: res.data,
      });

      return res;
    } catch (error) {
      const { data } = error.response;

      dispatch({
        type: SUBMISSION_CONSTANTS.GET_SUBMISSION_FAIL,
        payload: error,
      });

      if (data.message !== undefined) {
        const { message } = data;
        setAlert({
          type: ALERT_TYPE.ERROR,
          message,
        });
      }
    }
  };

  const handleGetSingleQuestions = async (questionId) => {
    try {
      dispatch({
        type: SUBMISSION_CONSTANTS.GET_SINGLE_QUESTION_LOADING,
        payload: true,
      });

      const res = await getSingleQuestion(questionId);

      dispatch({
        type: SUBMISSION_CONSTANTS.GET_SINGLE_QUESTION,
        payload: res.data,
      });

      return res;
    } catch (error) {
      const { data } = error.response;

      dispatch({
        type: SUBMISSION_CONSTANTS.GET_SINGLE_QUESTION_FAIL,
        payload: error,
      });

      if (data.message !== undefined) {
        const { message } = data;
        setAlert({
          type: ALERT_TYPE.ERROR,
          message,
        });
      }
    }
  };

  if (state.isLoading || state.error) return <Loader />;

  return (
    <SubmissionContext.Provider
      value={{ state, handleGetQuestionsList, handleGetSingleQuestions }}
    >
      {children}
    </SubmissionContext.Provider>
  );
};
