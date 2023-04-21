import { createContext, useContext, useEffect, useReducer } from "react";
import { getUserStatisticsAPI } from "../../actions/user";
import Loader from "../../components/common/loader/Loader";
import { ALERT_TYPE, AlertContext } from "../alert/AlertContextProvider";
import { AuthContext } from "../auth/AuthContextProvider";
import { USER_CONSTANTS, initialState, userReducer } from "./reducer";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const {
    state: { isLoading, isAuthenticated },
  } = useContext(AuthContext);

  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (!isLoading && isAuthenticated) getUserStatistics();
  }, []);

  const getUserStatistics = async () => {
    try {
      dispatch({
        type: USER_CONSTANTS.LOADING,
        payload: true,
      });

      const res = await getUserStatisticsAPI();
      dispatch({
        type: USER_CONSTANTS.GET_STATISTICS,
        payload: res.data,
      });

      return res;
    } catch (error) {
      const { data } = error.response;

      dispatch({
        type: USER_CONSTANTS.GET_STATISTICS_FAIL,
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
    <UserContext.Provider value={{ state, getUserStatistics }}>
      {children}
    </UserContext.Provider>
  );
};
