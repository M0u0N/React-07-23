import React from 'react'
import {useState} from 'react'

function Kujundus() {
    const [valitud, muudaValitud] = useState("family");


  return (
    <div>
        <span 
        className= {valitud === "family " ? "pakett-aktiivne" : "pakett"}
        onClick={() => muudaValitud("family")}>
            Family
        </span>;
        <span 
        className= {valitud === "standard " ? "pakett-aktiivne" : "pakett"}
        onClick={() => muudaValitud("standard")}>
            Standard
        </span>;
        <span
         className= {valitud === "mini " ? "pakett-aktiivne" : "pakett"}
         onClick={() => muudaValitud("mini")}>
            Mini
         </span>;


    </div>
  )
}

export default Kujundus