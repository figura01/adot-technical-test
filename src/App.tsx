import React, { useState } from 'react'
import { DestsProvider } from "./contexts/destsContext";
import { CssBaseline, ThemeProvider, Container} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import CustomModal from "./components/CustomModal";
import DestinationList from "./components/DestinationList";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <DestsProvider>
        <CssBaseline />
        <main>
          <Container>
            <CustomModal onCloseModal={handleClose} open={open}/>
            <Header onOpenModal={handleOpen}/>
            <DestinationList />
          </Container>
        </main>
      </DestsProvider>
    </ThemeProvider>
  );
}

export default App;
