import React from 'react'
import { useState } from 'react';
import Map from '../components/map/Map'
import Button from '@mui/material/Button'

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [58.7598, 25.5654], zoom: 10});

  return (<div className='buttons'>
        <Button variant='contained' onClick={() => setCoordinates({lngLat: [58.7598, 25.5654], zoom: 13})}>Oisu</Button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;