import Router from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
