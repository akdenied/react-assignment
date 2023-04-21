import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { MdOutlineTrendingDown, MdOutlineTrendingUp } from "react-icons/md";

const StatisticsCard = ({ count = "0", percent = "0", isPass = true }) => {
  console.log("🚀 ~ file: statistics.jsx:5 ~ Statistics ~ count:", {
    count,
    percent,
  });

  const color = isPass ? "#0f0" : "#f00";
  const percentRound = percent ? `${Number(percent).toFixed(2)}%` : "0%";

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} justifyContent="space-evenly">
          <Grid item>
            <Typography sx={{ fontSize: 18 }}>{count}</Typography>
          </Grid>
          <Grid item>
            {isPass ? (
              <MdOutlineTrendingUp size="30px" color={color} />
            ) : (
              <MdOutlineTrendingDown size="30px" color={color} />
            )}
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: 18 }}>{percentRound}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
