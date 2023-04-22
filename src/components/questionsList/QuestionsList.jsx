import WidgetsIcon from "@mui/icons-material/Widgets";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuestionContext } from "../../context/question/QuestionContextProvider";
import Loader from "../common/loader/Loader";
import { StyledList } from "./style";

const QuestionsList = () => {
  const { state } = useContext(QuestionContext);
  const { isLoading, questions } = state;

  if (isLoading) return <Loader />;

  if (questions.length <= 0)
    return (
      <Box py={20}>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <WidgetsIcon fontSize="large" />
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="h6">There are no questions</Typography>
          </Grid>
        </Grid>
      </Box>
    );

  return (
    <div>
      {questions.map((question) => (
        <StyledList
          key={question.id}
          component={Link}
          to={`/question/${question.id}`}
        >
          <Grid container justify="start" alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h6" align="left" color="text.primary">
                {question.title}
              </Typography>
              <Typography variant="subtitle1" align="left" color="text.primary">
                {question.description}
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <QuestionDifficulty difficulty={question.difficulty} />
            </Grid>
            <Grid item xs={2}>
              <QuestionDifficulty
                difficulty={question.percent ? question.percent + "%" : "0%"}
              />
            </Grid>

            <Grid item xs={12}>
              <Divider variant="fullWidth" component="li" />
            </Grid>
          </Grid>
        </StyledList>
      ))}
    </div>
  );
};

export default QuestionsList;

const QuestionDifficulty = ({ difficulty }) => {
  const color = () => {
    if (difficulty == "Hard") return "red";
    if (difficulty == "Medium") return "darkorange";
    if (difficulty == "Easy") return "greenyellow";
    return "gray";
  };

  return (
    <Typography variant="subtitle1" color={color}>
      {difficulty}
    </Typography>
  );
};
