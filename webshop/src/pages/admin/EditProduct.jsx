import React, { useRef, useState } from 'react'
import productsFromFile from '../../Data/products.json'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function EditProduct() {
  const {t} = useTranslation();
  const {productId} = useParams();
  const found = productsFromFile.find(product => product.id === Number(productId));
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  const [idUnique, setIdUnique] = useState("");

  const checkUniqueID = () => {
    const index = productsFromFile.findIndex(product => product.id === Number(idRef.current.value))
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
      toast.error(t())
      return;
    }

    if (nameRef.current.value === "") {
      toast.error(t())
      return;
    }

    if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
      toast.error(t())
      return;
    }

    if (imageRef.current.value.includes(" ")) {
      toast.error(t())
      return;
    }



    const index = productsFromFile.findIndex(product => product.id === Number(productId));
    productsFromFile[index] = {
        "id": Number(idRef.current.value),
        "image": imageRef.current.value,
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "description": descriptionRef.current.value,
        "category": categoryRef.current.value,
        "active": activeRef.current.checked
    };
    navigate("/admin/maintain-products");

  }

  if (found === undefined) {
    return <div>{t("notfound")}</div>
  }

  return (
    <div>
      {idUnique === false && <div>ID pole unikaalne</div>}
      <label>ID</label> <br />
      <input className={idUnique === false ? "error" : undefined} ref={idRef} onChange={checkUniqueID} defaultValue={found.id} type='number' /> <br />
      <label>Name</label> <br />
      <input ref={nameRef} defaultValue={found.name} type='text' /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} defaultValue={found.price} type='number' /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} defaultValue={found.image} type='text' /> <br />
      <label>Category</label> <br />
      <input ref={categoryRef} defaultValue={found.category} type='text' /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} defaultValue={found.description} type='text' /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} defaultChecked={found.active} type='checkbox' /> <br />
      <button disabled={idUnique === false} onClick={edit}>edit</button>
    </div>
  )
}

export default EditProduct