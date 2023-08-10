import React from 'react'
import { useParams } from 'react-router-dom'
import joogidFail from '../data/joogid.json'

function Jook() {
    const {number} = useParams();
    const leitud = joogidFail[number]


  return (
    <div>
    {leitud}
    {leitud === undefined && <div>Jooki ei leitud</div>}
    </div>
  )
}

export default Jook