import { useEffect, useState } from "react";
import { Product } from "../../models/product";
import Catalog from "../../features/catalog/Catalog";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode,setDarkMode]=useState(false)

  const palletteType=darkMode?'dark':'light'


  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

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
        <Catalog products={products} />
      </Container>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
