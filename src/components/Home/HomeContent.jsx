import { Box, Container, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/user/UserContextProvider";
import CodeEditor from "../common/CodeEditor/CodeEditor";
import Loader from "../common/loader/Loader";
import QuestionsList from "../questionsList/QuestionsList";
import StatisticsCard from "../widget/StatisticsCard/StatisticsCard";

const HomeContent = () => {
  const { state, getUserStatistics } = useContext(UserContext);
  const { isLoading, statistics } = state;

  const { pass, fail } = statistics;
  if (isLoading) return <Loader />;
  return (
    <Container>
      <Box py={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <StatisticsCard count={pass?.count} percent={pass?.percent} />
          </Grid>
          <Grid item xs={4}>
            <StatisticsCard
              count={fail?.count}
              percent={fail?.percent}
              isPass={false}
            />
          </Grid>
          <Grid item xs={12}>
            <QuestionsList />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeContent;
