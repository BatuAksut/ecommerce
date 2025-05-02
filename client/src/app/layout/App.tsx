
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";


function App() {

  const [darkMode,setDarkMode]=useState(false)

  const palletteType=darkMode?'dark':'light'




  const theme = createTheme({
    palette: {
      mode: palletteType,
      background:{
        default:(palletteType==='light') ?'#121212': '#eaeaea'
      }
    },
  });
  


  return (
    <>
    
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Box
    sx={{
      minHeight:'100vh',
      background:darkMode? 'radial-gradient(circle,#1e3aBa,#111B27)': 'radial-gradient(circle,#baecf9,#f0f9ff)',
      py:6
    }}

    >
      <Container maxWidth="xl" sx={{mt:8}}>
        <Outlet/>
      </Container>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
