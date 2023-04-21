import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "../components/common/protectedRoute/ProtectedRoute";
import { Home, Layout, Login, Register } from "../views/index";
import Question from "../views/pages/question/Question";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/question/:questionId",
        element: (
          <ProtectedRoute>
            <Question />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
