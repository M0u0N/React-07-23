import React, { useRef, useState } from 'react'
import productsFromFile from '../../Data/products.json'
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function AddProduct() {
  const {t} = useTranslation();
  const [text, setText] = useState(t("addProduct"));
  const idRef = useRef();
  const imageRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const activeRef = useRef();

  const [idUnique, setIdUnique] = useState("");

  const checkUniqueID = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(idRef.current.value))
    
    if (index === -1) {
      setIdUnique(true)
    } else {
      setIdUnique(false)
    }
  }

  const add = () => {
    if (idRef.current.value === "") {
      setText(t("failID"))
      toast.error(t("failID"))
      return;
    } 

    if (nameRef.current.value === "") {
      setText(t("fail"))
      toast.error(t("fail"))
      return;
    }

    if (imageRef.current.value.includes(" ")) {
      setText(t("failImageSpace"))
      toast.error(t("failImageSpace"))
      return;
    }

    if (nameRef.current.value[0].toLowerCase() === nameRef.current.value[0]) {
      setText(t("failNameLowercase"))
      toast.error(t("failNameLowercase"))
      return;
    }
    else {
      setText(t("success") + nameRef.current.value)
      toast.success(t("success") + nameRef.current.value)
      productsFromFile.push({
        "id": Number(idRef.current.value),
        "image": imageRef.current.value,
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "active": activeRef.current.checked,
      })}}



  return (
    <div>
      {idUnique === false && <div>{t("uniqueID")}</div>}
      <div>{text}</div>
      <label>{t("id")}</label> <br />
      <input ref={idRef} className={idUnique === false ? "error" : undefined} onChange={checkUniqueID}  type='number' /> <br />
      <label>{t("name")}</label> <br />
      <input ref={nameRef}  type='text' /> <br />
      <label>{t("price")}</label> <br />
      <input ref={priceRef}  type='number' /> <br />
      <label>{t("image")}</label> <br />
      <input ref={imageRef}  type='text' /> <br />
      <label>{t("category")}</label> <br />
      <input ref={categoryRef}  type='text' /> <br />
      <label>{t("description")}</label> <br />
      <input ref={descriptionRef}  type='text' /> <br />
      <label>{t("active")}</label> <br />
      <input ref={activeRef} type='checkbox' /> <br />
      <button disabled={idUnique === false} onClick={add}>{t("add")}</button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      
      />  



    </div>
  )
}

export default AddProduct