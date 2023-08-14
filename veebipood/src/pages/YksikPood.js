import React from 'react'
import { useParams } from 'react-router-dom'
import poedFail from '../data/poed.json'

function YksikPood() {
    const {index} = useParams();
    const poed = poedFail[index]


  if (poed === undefined) {
    return <div>Poodi ei leitud</div>
  }

  return (
    <div>
        <div>Järjekorranumber: {index} </div>
        <div>Nimi: {poed.nimi} </div>
        <div>Lahtioleku aeg: {poed.aeg} </div>
        <div>Telefoninumber: {poed.tel} </div>
    </div>
  )
}

export default YksikPood
