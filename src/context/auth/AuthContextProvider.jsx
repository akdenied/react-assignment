import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
} from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUserDetails, login, register } from "../../actions/auth";
import Loader from "../../components/common/loader/Loader";
import { ALERT_TYPE, AlertContext } from "../alert/AlertContextProvider";
import { AUTH_CONSTANTS, authReducer, initialState } from "./reducer";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    const prepareState = async () => {
      const token = await localStorage.getItem("token");
      if (token) getCurrentUser(token);
    };

    prepareState();
  }, []);

  const registerUser = async ({ email, password }) => {
    try {
      dispatch({
        type: AUTH_CONSTANTS.LOADING,
        payload: true,
      });
      const payload = { email, password };

      const res = await register(payload);

      return res;
    } catch (error) {
      const { data } = error.response;

      if (data.message !== undefined) {
        const { message } = data;
        setAlert({
          type: ALERT_TYPE.ERROR,
          message,
        });
      }
    }
  };

  const loginUser = async ({ email, password }) => {
    try {
      dispatch({
        type: AUTH_CONSTANTS.LOADING,
        payload: true,
      });
      const payload = { email, password };

      const data = await login(payload);

      localStorage.setItem("token", data.data.token);

      dispatch({
        type: AUTH_CONSTANTS.LOGIN,
        payload: {
          user: data.data.user,
          token: data.data.token,
        },
      });
      return data;
    } catch (error) {
      const { data } = error.response;

      if (data.message !== undefined) {
        const { message } = data;
        setAlert({
          type: ALERT_TYPE.ERROR,
          message,
        });
      }
    }
  };

  const getCurrentUser = async () => {
    try {
      dispatch({
        type: AUTH_CONSTANTS.LOADING,
        payload: true,
      });

      const data = await getCurrentUserDetails();

      dispatch({
        type: AUTH_CONSTANTS.GET_CURRENT_USER,
        payload: {
          user: data.data,
        },
      });

      return data;
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: AUTH_CONSTANTS.GET_CURRENT_USER_FAIL,
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

  const logOut = () => dispatch({ type: AUTH_CONSTANTS.LOG_OUT });

  if (state.isLoading || state.error) return <Loader />;

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        login: loginUser,
        register: registerUser,
        getCurrentUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
