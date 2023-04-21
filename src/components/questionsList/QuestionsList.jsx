import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuestionContext } from "../../context/question/QuestionContextProvider";
import Loader from "../common/loader/Loader";

const QuestionsList = () => {
  const { state } = useContext(QuestionContext);
  const { isLoading, questions } = state;

  if (isLoading) return <Loader />;

  return (
    <div>
      {questions.map((question) => (
        <List component={Link} to={`/question/${question.id}`}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={question.title}
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {question.description}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
        </List>
      ))}
    </div>
  );
};

export default QuestionsList;
