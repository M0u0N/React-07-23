import React from 'react'
import { useState, useEffect } from 'react';
import Map from '../../components/Map';
import config from '../../Data/config.json'

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState([])

  useEffect(() => {
    fetch(config.shops)
    .then(res => res.json())
    .then(json => setShops(json || []))

  }, []);


  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.7977, 25.4349], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik poed Tallinn</button>
    
    {/* <button onClick={() => setCoordinates({lngLat: [59.4212, 24.7927], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4271, 24.7229], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3778, 26.7308], zoom: 13})}>Tasku</button> */}
    {shops.map(shop => <button key={shop.name} onClick={() => setCoordinates({lngLat: [shop.latitude, shop.longitude], zoom:13})}>{shop.name}</button>)}



    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;