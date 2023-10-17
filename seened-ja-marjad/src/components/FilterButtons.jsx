import React from 'react'


function FilterButtons({dbProducts, setProducts, categories}) {


  const filterByCategory = (categoryClicked) => {
    const ans = dbProducts.filter(product => product.category === categoryClicked)
    setProducts(ans)
    }

  return (
    <div>
      {categories.map(category => <button key={category.name} onClick={() => filterByCategory(category.name)}>{(category.name)}</button>)}
    </div>
  )
}

export default FilterButtons