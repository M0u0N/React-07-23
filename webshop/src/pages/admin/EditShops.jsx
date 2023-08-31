import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import config from '../../Data/config.json'


function EditShops() {
    const [shops, setShops] = useState([])
    const [dbShops, setDbShops] = useState([])
    const {t} = useTranslation();
    const {shopName} = useParams();
    const nameRef = useRef();
    const openTimeRef = useRef();
    const latitudeRef = useRef();
    const longitudeRef = useRef();
    const addressRef = useRef();
    const urlRef = useRef();
    const navigate = useNavigate();
    const [nameUnique, setNameUnique] = useState("");
    const found = shops.find(shop => shop.name === (shopName));
  
    useEffect(() => {
      fetch(config.shops)
      .then(res => res.json())
      .then(json => {
        setShops(json || [])
        setDbShops(json || [])
      })
    }, []);
  
    const checkUniqueName = () => {
      if (nameRef.current.value === shopName) {
        setNameUnique(true)
        return;
      }
  
  
      const index = dbShops.findIndex(shop => shop.name === (nameRef.current.value))
  
      if (index === -1) {
        setNameUnique(true)
      } else {
        setNameUnique(false)
      }
    }
  
  
    const edit = () => {

      if (nameRef.current.value === "") {
        toast.error(t("fail"))
        return;
      }
  
      if (nameRef.current.value[0].toUpperCase() !== nameRef.current.value[0]) {
        toast.error(t("failNameLowercase"))
        return;
      }

      if (urlRef.current.value.includes(" ")) {
        toast.error(t("failImageSpace"))
        return;
      }
  
  
      const index = dbShops.findIndex(shop => shop.name === (shopName));
      dbShops[index] = {
        "name": nameRef.current.value,
        "open": (openTimeRef.current.value),
        "latitude": Number(latitudeRef.current.value),
        "longitude": Number(longitudeRef.current.value),
        "address": addressRef.current.value,
        "url": urlRef.current.value,
      };
      fetch(config.shops,
        {method: "PUT",
        body: JSON.stringify(dbShops)});
  
      navigate("/admin/maintain-shops");
  
    }
  
    if (found === undefined) {
      return <div>{t("notfound")}</div>
    }

  return (
    <div>
        {nameUnique === false && <div>{t("uniqueID")}</div>}
      <label>{t("name")}</label> <br />
      <input className={nameUnique === false ? "error" : undefined} ref={nameRef} onChange={checkUniqueName} defaultValue={found.name} type='text' /> <br />

      <label>Avatud</label> <br />
      <input ref={openTimeRef} defaultValue={found.open} type='text' /> <br />
      <label>latitude</label> <br />
      <input ref={latitudeRef} defaultValue={found.latitude} type='number' /> <br />
      <label>longitude</label> <br />
      <input ref={longitudeRef} defaultValue={found.longitude} type='number' /> <br />
      <label>address</label> <br />
      <input ref={addressRef} defaultValue={found.address} type='text' /> <br />
      <label>URL</label> <br />
      <input ref={urlRef} defaultValue={found.url} type='text' /> <br />
      <button disabled={nameUnique === false} onClick={edit}>{t("edit")}</button>
        <ToastContainer position="bottom-right" theme="dark" />

    </div>
  )
}

export default EditShops