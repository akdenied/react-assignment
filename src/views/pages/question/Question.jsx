import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeEditor from "../../../components/common/CodeEditor/CodeEditor";
import Loader from "../../../components/common/loader/Loader";
import {
  QuestionContext,
  QuestionContextProvider,
} from "../../../context/question/QuestionContextProvider";

const QuestionContent = () => {
  const { questionId } = useParams();
  const { handleGetSingleQuestions, state } = useContext(QuestionContext);

  const { isLoading, data } = state.question;

  useEffect(() => {
    handleGetSingleQuestions(questionId);
  }, [questionId]);

  if (isLoading) return <Loader />;

  return (
    <Container
      sx={{
        width: "100%",
      }}
    >
      <Box py={3}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography variant="h5">{data.title}</Typography>
            <Typography variant="h6">{data.description}</Typography>
            {data?.testCases?.map((testcase, index) => (
              <Box
                p={2}
                sx={{
                  backgroundColor: grey[100],
                  borderRadius: 2,
                  mb: 2,
                }}
              >
                <Typography key={index} variant="button">
                  Example {index + 1}:
                </Typography>
                <Typography key={index} variant="body2">
                  {testcase.input}
                </Typography>
                <Typography key={index} variant="body2">
                  {testcase.output}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={7}>
            <CodeEditor />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const Question = () => {
  return (
    <QuestionContextProvider>
      <QuestionContent />
    </QuestionContextProvider>
  );
};

export default Question;
