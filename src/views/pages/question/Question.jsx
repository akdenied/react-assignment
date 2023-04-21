import { Box, Container, Grid } from "@mui/material";
import React from "react";
import CodeEditor from "../../../components/common/CodeEditor/CodeEditor";

const Question = () => {
  return (
    <Container>
      <Box py={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <CodeEditor />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Question;
