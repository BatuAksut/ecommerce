
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";





function App() {


  const {darkMode}=useAppSelector(state=>state.ui)
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
    <NavBar/>
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
