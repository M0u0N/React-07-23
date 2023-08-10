import React from 'react'
import { useParams } from 'react-router-dom'
import nimedFail from '../Data/nimed.json'

function YksiksTagasisideAndja() {
    const {index} = useParams()
    const vastus = nimedFail[index]

  return (
    <div>
        <div>Nimi: {vastus} </div>
        <div>Järjekorranumber: {index} </div>
    </div>
  )
}

export default YksiksTagasisideAndja