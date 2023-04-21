import { createContext, useContext, useEffect, useReducer } from "react";
import { getQuestionList } from "../../actions/questions";
import Loader from "../../components/common/loader/Loader";
import { ALERT_TYPE, AlertContext } from "../alert/AlertContextProvider";
import { AuthContext } from "../auth/AuthContextProvider";
import { QUESTION_CONSTANTS, initialState, questionReducer } from "./reducer";

export const QuestionContext = createContext(null);

export const QuestionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);

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
        type: QUESTION_CONSTANTS.LOADING,
        payload: true,
      });

      const res = await getQuestionList();
      dispatch({
        type: QUESTION_CONSTANTS.GET_QUESTION,
        payload: res.data,
      });

      return res;
    } catch (error) {
      const { data } = error.response;

      dispatch({
        type: QUESTION_CONSTANTS.GET_STATISTICS_FAIL,
        payload: res.data,
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
    <QuestionContext.Provider value={{ state, handleGetQuestionsList }}>
      {children}
    </QuestionContext.Provider>
  );
};
