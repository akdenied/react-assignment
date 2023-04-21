import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/common/loader/Loader";
import { AuthContext } from "../../context/auth/AuthContextProvider";
import { UserContext } from "../../context/user/UserContextProvider";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
