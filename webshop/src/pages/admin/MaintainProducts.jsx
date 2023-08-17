import React, { useState } from 'react'
import productsFromFile from '../../Data/products.json'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  return (
    <div>
      {products.map((product) => (
      <div key={product.id}>
        <img src={product.image} alt="" />
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.category}</div>
        <div>{product.description}</div>
        <button>delete</button>
        <Button as={Link} to={"/admin/edit-product/" + product.id}>edit</Button>
      </div>
      ))}
    </div>
  )
}

export default MaintainProducts