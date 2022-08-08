import { TextField, Typography, Grid, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Google } from "@mui/icons-material";
import { login as loginUser } from "./../../store/features/user/login";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ChangeEvent, useEffect, useState } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const session = useAppSelector((state) => state.users.session);
  console.log(session);
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(loginUser(userData));
  };
  const handleChangeUserData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (session.data.token) {
      navigate(`/`, { replace: true });
    }
  }, [navigate, session.data.token]);

  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="userName"
              value={userData.userName}
              onChange={handleChangeUserData}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contrasña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={userData.password}
              onChange={handleChangeUserData}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleLogin()}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
