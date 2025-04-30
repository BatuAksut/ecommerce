import { useEffect, useState } from "react"

function App() {



  const [products,setProducts]=useState<{name:string,price:number}[]>([]);


  useEffect(()=>{
    fetch('https://localhost:5001/api/products')
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])



  const addProduct= ()=>{
    setProducts(prev=> [...prev,{name:"product"+(prev.length + 1),price:(prev.length*100)+100}],)
  }


  return (


    
    <div>
      <h1>Re Store</h1>
      <ul>
        {products.map((product,index)=>{
          return <li key={index}>{product.name} - {product.price}</li>
        })}
      </ul>
      <button onClick={addProduct}>add</button>
    </div>
  )
}

export default App
