import { TextField, Typography, Grid, Link } from "@mui/material";
import { Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SnackbarMessage } from "../../components/commons/snackbars";
import { AuthLayout } from "../../layouts/AuthLayout";
import { UserData } from "../../models/session/signUp";
import { singUp } from "../../services/session/login";

interface StateAlert {
  open: boolean;
  vertical: "bottom" | "top";
  horizontal: "right" | "left" | "center";
  message: string;
  title: string;
  error: boolean;
}
export const RegisterPage = () => {
  const [alert, setAlert] = useState<StateAlert>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
    message: "",
    title: "",
    error: false,
  });

  const [userData, setUserData] = useState<UserData>({
    name: "",
    surname: "",
    userName: "",
    password: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSendData = async () => {
    const status = await singUp(userData);
    if (status.status === 200) {
      return setAlert({
        ...alert,
        open: true,
        message: "Usuario creado!",
        title: "Exito!",
        error: false,
      });
    }
    if (status.status === 409) {
        return setAlert({
            ...alert,
      open: true,
      message: "El usuario ya esta registrado!",
      title: "Error!",
      error: true,
        });
      }
    return setAlert({
      ...alert,
      open: true,
      message: "no se ha podido crear el usuario!",
      title: "Error!",
      error: true,
    });
  };
  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Apellido"
              type="text"
              placeholder="Ingrese su apellido"
              fullWidth
              name="surname"
              value={userData.surname}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="userName"
              onChange={handleChange}
              value={userData.userName}
              required
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              onChange={handleChange}
              value={userData.password}
              required
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handleSendData}>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿ Ya tienes cuenta ?</Typography>
            <Link component={RouterLink} color="inherit" to="/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
      <SnackbarMessage
        open={alert.open}
        vertical={alert.vertical}
        horizontal={alert.horizontal}
        handleClose={handleCloseAlert}
        message={alert.message}
        title={alert.title}
        error={alert.error}
      />
    </AuthLayout>
  );
};

