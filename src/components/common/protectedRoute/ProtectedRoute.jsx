import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth/AuthContextProvider";
import Loader from "../loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const { isLoading, isAuthenticated } = state;
  if (isLoading) return <Loader />;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
