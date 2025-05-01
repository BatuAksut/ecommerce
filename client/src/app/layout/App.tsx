import { useEffect, useState } from "react"
import { Product } from "../../models/product";
import Catalog from "../../features/catalog/Catalog";

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


    
    <div>
      <h1>Re Store</h1>
      <Catalog products={products} addProduct={addProduct} />
      
    </div>
  )
}

export default App
