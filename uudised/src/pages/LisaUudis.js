import React, { useState } from 'react'
import {useRef} from 'react'

function LisaUudis() {
    const uudiseRef = useRef();
    const [sonum, uuendaSonum] = useState("")


    const lisaUusUudis = () => {
        const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }

    const kontrolli = () => {
      uuendaSonum("");

      if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()) {
        uuendaSonum("Uudis peab algama suure tähega!")
      } 

      if (uudiseRef.current.value.includes("  ")) {
        uuendaSonum("Sisestasid kaks tühikut korraga, palun paranda!")
      }

    }

  return (
    <div>
        <div>{sonum} </div>
        <label>Uudise nimi</label> <br />
        <input onChange={kontrolli} ref={uudiseRef} type='text' /> <br />
        <button onClick={lisaUusUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis