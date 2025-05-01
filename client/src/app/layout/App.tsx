import { useEffect, useState } from "react"
import { Product } from "../../models/product";
import Catalog from "../../features/catalog/Catalog";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function App() {



  const [products,setProducts]=useState<Product[]>([]);


  useEffect(()=>{
    fetch('https://localhost:5001/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])



  const addProduct= ()=>{
    setProducts(prev=> [...prev,
      {id:prev.length+1,
      name:"product"+(prev.length + 1),
      price:(prev.length*100)+100,
      quantityInStock:100,
      description:'test',
      pictureUrl:"https://picsum.photo/200",
    }
    ],)
  }


  return (


    <Container maxWidth='xl'>
    <div>
      <Box display='flex' justifyContent='center' gap={3} marginY={3}>
      <Typography variant="h4">Re Store</Typography>
      <Button variant="contained" onClick={addProduct}>add</Button>
      </Box>
     
      <Catalog products={products}/>
      
    </div>
    </Container>
  )
}

export default App
