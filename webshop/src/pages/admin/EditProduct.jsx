import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'react-bootstrap';
import config from '../../Data/config.json'



function EditProduct() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [dbProducts, setDbProducts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const {t} = useTranslation();
  const {productId} = useParams();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [idUnique, setIdUnique] = useState("");
  const found = dbProducts.find(product => product.id === Number(productId));

  useEffect(() => {
    fetch(config.products)
    .then(res => res.json())
    .then(json => {
      setProducts(json || [])
      setDbProducts(json || [])
      setLoading(false)
    })

    fetch(config.categories)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);

  const checkUniqueID = () => {
    if (idRef.current.value === productId) {
      setIdUnique(true)
      return;
    }


    const index = products.findIndex(product => product.id === Number(idRef.current.value))
    // const product = productsFromFile.find(product => product.id === Number(idRef.current.value))
    // const result = productsFromFile.filter(product => product.id === Number(idRef.current.value))

    if (index === -1) {
      setIdUnique(true)
    } else {
      setIdUnique(false)
    }
    // if (product === undefined){}
    // if (result.length === 0){}

  }


  const edit = () => {
    if (idRef.current.value === "") {
      toast.error(t("failID"))
      return;
    }

    if (nameRef.current.value === "") {
      toast.error(t("fail"))
      return;
    }

    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      toast.error(t("failNameLowercase"))
      return;
    }

    if (imageRef.current.value.includes(" ")) {
      toast.error(t("failImageSpace"))
      return;
    }



    const index = dbProducts.findIndex(product => product.id === Number(productId));
    dbProducts[index] = {
        "id": Number(idRef.current.value),
        "image": imageRef.current.value,
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "active": activeRef.current.checked
    };
    fetch(config.products,
      {method: "PUT",
      body: JSON.stringify(dbProducts)
      }).then(() => navigate("/admin/maintain-products"))

  }

  if (isLoading === true) {
    return <Spinner/>
  }

  if (found === undefined) {
    return <div>{t("notfound")}</div>
  }

  return (
    <div>
      {idUnique === false && <div>{t("uniqueID")}</div>}
      <label>{t("id")}</label> <br />
      <input className={idUnique === false ? "error" : undefined} ref={idRef} onChange={checkUniqueID} defaultValue={found.id} type='number' /> <br />
      <label>{t("name")}</label> <br />
      <input ref={nameRef} defaultValue={found.name} type='text' /> <br />
      <label>{t("price")}</label> <br />
      <input ref={priceRef} defaultValue={found.price} type='number' /> <br />
      <label>{t("image")}</label> <br />
      <input ref={imageRef} defaultValue={found.image} type='text' /> <br />
      <label>{t("category")}</label> <br />
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select>
      <br />
      <label>{t("description")}</label> <br />
      <input ref={descriptionRef} defaultValue={found.description} type='text' /> <br />
      <label>{t("active")}</label> <br />
      <input ref={activeRef} defaultChecked={found.active} type='checkbox' /> <br />
      <button disabled={idUnique === false} onClick={edit}>{t("edit")}</button>
        <ToastContainer position="bottom-right" theme="dark" />

    </div>
    
  )
}

export default EditProduct