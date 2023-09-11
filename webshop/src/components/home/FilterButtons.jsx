import React from 'react'
import { useTranslation } from 'react-i18next';

function FilterButtons({dbProducts, setProducts, categories}) {
    const {t} = useTranslation();
// const filterMemoryBank = () => {
  //   const ans = products.filter(product => product.category === "memory bank")
  //     setProducts(ans)
  //   }
 
  // const filterUSBDrive = () => {
  //   const ans = products.filter(product => product.category === "usb drive")
  //     setProducts(ans)
  //   }

  const filterByCategory = (categoryClicked) => {
    const ans = dbProducts.filter(product => product.category === categoryClicked)
    setProducts(ans)
    }

  return (
    <div>
{/* <button onClick={() => filterByCategory("memory bank")}>{t("filtMB")}</button>
      <button onClick={() => filterByCategory("usb drive")}>{t("filtUSBD")}</button> */}
      {categories.map(category => <button key={category.name} onClick={() => filterByCategory(category.name)}>{t(category.name)}</button>)}
    </div>
  )
}

export default FilterButtons