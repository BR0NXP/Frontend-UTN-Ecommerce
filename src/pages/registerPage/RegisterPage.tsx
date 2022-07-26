import { TextField, Typography, Grid, Link } from "@mui/material"
import { Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../../layouts/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
        <form>
            <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2}}>
                    <TextField
                    label="Nombre Completo"
                    type="text"
                    placeholder="Tu nombre"
                    fullWidth
                    />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2}}>
                    <TextField
                    label="correo"
                    type="email"
                    placeholder="correo@google.com"
                    fullWidth
                    />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2}}>
                    <TextField
                    label="contraseña"
                    type="password"
                    placeholder="Contraseña"
                    fullWidth
                    />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                    <Grid item xs={ 12 }>
                        <Button variant='contained' fullWidth>
                            Crear cuenta
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1}}>¿ Ya tienes cuenta ?</Typography>
                    <Link component={ RouterLink } color='inherit' to="/login">
                        Ingresar
                    </Link>
                </Grid>
            </Grid>
        </form>
    </AuthLayout>
  )
}
