import React, { createContext } from "react";

import Routes from "./routes/Routes";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: { main: '#1976d2' },
    },
  }, ptBR);
  
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
