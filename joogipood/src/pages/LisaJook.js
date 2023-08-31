import React from 'react'
import {useEffect, useRef, useState} from 'react'
import config from '../data/config.json'

function LisaJook() {
    const jookRef = useRef();
    const [joogid, setJoogid] = useState([])

    useEffect(() => {
      fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(json => setJoogid(json || []))
      
    }, []);


    const lisaUusJook = () => {
        joogid.push({"nimi": jookRef.current.value});
        fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)})
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