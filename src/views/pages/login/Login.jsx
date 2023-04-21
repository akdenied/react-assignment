import {
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../../../context/auth/AuthContextProvider";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().label("Email Address").required(),
  password: Yup.string().label("Password").required(),
});

const Login = () => {
  const { state, login } = useContext(AuthContext);
  const { isAuthenticated } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const prepareState = () => {
      if (isAuthenticated) navigate("/");
    };
    prepareState();
  }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: "ankit@gmail.com",
      password: "Pa$$w0rd!",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await login(values);
        console.log("🚀 ~ file: Login.jsx:39 ~ onSubmit: ~ res:", res);
        if (res.status == "PASS") {
          navigate("/");
        }
      } catch (error) {}
    },
  });

  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    formik;

  const handleNavigationToRegister = () => navigate("/register");

  return (
    <Container
      direction="column"
      align="center"
      justify="center"
      style={{ minHeight: "100vh", display: "flex" }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Enter Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />

              {errors.email && touched.email && (
                <Typography variant="body2" className="error-msg">
                  {errors.email}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Enter Password"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Typography variant="body2" className="error-msg">
                  {errors.password}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={2} direction="row" justifyContent={"flex-end"}>
                <Button variant="outlined" onClick={handleNavigationToRegister}>
                  Register
                </Button>
                <Button variant="contained" type="submit">
                  Login
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
