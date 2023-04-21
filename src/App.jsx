import { Backdrop } from "@mui/material";
import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/common/loader/Loader";
import { AlertContextProvider } from "./context/alert/AlertContextProvider";
import {
  AuthContext,
  AuthContextProvider,
} from "./context/auth/AuthContextProvider";
import { UserContextProvider } from "./context/user/UserContextProvider";
import { router } from "./routes";

/*
 * Temporary problems array schema
 */
const problems = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%",
  },
  {
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
];

const App = () => {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  // const { state, getCurrentUser } = useContext(AuthContext);
  // const { isLoading, isAuthenticated } = state;

  // useEffect(() => {
  //   const prepareState = async () => {
  //     const token = await localStorage.getItem("token");
  //     if (token) {
  //       await getCurrentUser();
  //     }
  //   };
  //   prepareState();
  // }, [isAuthenticated]);

  // if (isLoading) return <Loader />;

  return (
    // <UserContextProvider>
    <AlertContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </AlertContextProvider>
    // </UserContextProvider>
  );
};

export default App;
