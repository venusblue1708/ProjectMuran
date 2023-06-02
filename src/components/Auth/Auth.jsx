import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { useAuth } from "../contexts/AuthContextProvider";
import { auth, provider } from "../../fire";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Welcome to "}
      <Link color="inherit" href="/">
        Muran
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth() {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleSignUp,
    handleLogin,
  } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [value, setValue] = React.useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  React.useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: "#ffcb69" }}>
            <LockOutlinedIcon />
          </Avatar>
          {hasAccount ? (
            <Typography component="h1" variant="h5">
              Вход в аккаунт
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Регистрация
            </Typography>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={passwordError}
            />

            {hasAccount ? (
              <Button
                type="submit"
                fullWidth
                variant="success"
                sx={{ mt: 3, mb: 2, backgroundColor: "#825f45" }}
                onClick={() => {
                  handleLogin();
                  navigate("/");
                }}
              >
                Войти
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="success"
                sx={{ mt: 3, mb: 2, backgroundColor: "#797d62" }}
                onClick={handleSignUp}
              >
                Зарегистрироваться
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link
                  sx={{ color: "#5e503f", textDecoration: "none" }}
                  href="#"
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {hasAccount ? (
                  <Link
                    sx={{ color: "#5e503f", textDecoration: "none" }}
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"Don't have an account? Register Now"}
                  </Link>
                ) : (
                  <Link
                    sx={{ color: "#5e503f", textDecoration: "none" }}
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"Already have an account? Log In"}
                  </Link>
                )}

                <Box>
                  <Link
                    sx={{ color: "#2c6e49", textDecoration: "none" }}
                    href="#"
                    variant="body2"
                    onClick={handleClick}
                  >
                    {"Sign In with Google"}
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
