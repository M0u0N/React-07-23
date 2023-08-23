import React from 'react'
import { useState } from 'react';
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.7977, 25.4349], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik poed Tallinn</button>
    
    <button onClick={() => setCoordinates({lngLat: [59.4212, 24.7927], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4271, 24.7229], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3778, 26.7308], zoom: 13})}>Tasku</button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;