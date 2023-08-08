import React from 'react'
import {useState, useRef} from 'react'
import joogidFail from '../data/joogid.json'

function LisaJook() {

        const jookRef = useRef();

    const lisaUusJook = () => {
        joogidFail.push(jookRef.current.value)
    }
  return (
    <div>
        <label>Lisa uus Jook:</label>
        <input ref={jookRef} type="text" />
        <button onClick={lisaUusJook}>Lisa</button>
    </div>
  )
}

export default LisaJook