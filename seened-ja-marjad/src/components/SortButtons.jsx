import React from 'react'


function SortButtons(props) {


    const sortAZ = () => {
        props.products.sort((a, b) => a.name.localeCompare(b.name));
        props.setProducts(props.products.slice())
        }
      
      const sortZA = () => {
        props.products.sort((a, b) => b.name.localeCompare(a.name));
        props.setProducts(props.products.slice())
        }
      
      const sortPriceAsc = () => {
        props.products.sort((a, b) => a.price - b.price);
        props.setProducts(props.products.slice())
        }
      
      const sortPriceDesc = () => {
        props.products.sort((a, b) => b.price - a.price);
        props.setProducts(props.products.slice())
        }

  return (
    <React.Fragment>
        <button onClick={() => sortAZ()}>Sorteeri A - Z </button>
        <button onClick={() => sortZA()}>Sorteeri Z - A</button>
        <button onClick={() => sortPriceAsc()}>Odavamad enne</button>
        <button onClick={() => sortPriceDesc()}>Kallimad enne</button>
    </React.Fragment>
  )
}

export default SortButtons