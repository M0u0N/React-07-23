import React, { useState } from 'react'
import productsFromFile from "../../Data/products.json"


function HomePage () {
  const [products, setProducts] = useState(productsFromFile);


  return (
    <div>
      <div>Total products {products.length} pcs</div>
      <br />
      <button>sort A-Z</button>
      <button>sort Z-A</button>
      <button>sort price asc</button>
      <button>sort price desc</button>
      <br /> <br />
      <button>memory bank</button>
      <button>usb drive</button>
      <br /> <br/>
      {productsFromFile.map(product => (
      <div key={product.id}>
        <img src={product.image} alt="" />
        <div> {product.name} </div>
        <div> {product.price} €</div>
        <button>add-to-cart</button>
      </div>
      
      ))}
    </div>
  )

  
}

export default HomePage