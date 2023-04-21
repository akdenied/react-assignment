import React from "react";
import HomeContent from "../../../components/Home/HomeContent";
import { QuestionContextProvider } from "../../../context/question/QuestionContextProvider";
import { UserContextProvider } from "../../../context/user/UserContextProvider";

const Home = () => {
  return (
    <UserContextProvider>
      <QuestionContextProvider>
        <HomeContent />
      </QuestionContextProvider>
    </UserContextProvider>
  );
};

export default Home;
