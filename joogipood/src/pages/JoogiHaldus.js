import React from 'react'
import {useState, useEffect} from 'react'
import config from '../data/config.json'

function JoogiHaldus() {
    const [joogid, muudaJoogid] = useState([])

    useEffect(() => {
        fetch(config.joogidDbUrl)
        .then(res => res.json())
        .then(json => muudaJoogid(json || []));
    }, []);

    const del = (index) => {
        joogid.splice(index, 1);
        muudaJoogid(joogid.slice())
        fetch(config.joogidDbUrl, {"method": "PUT", "body": JSON.stringify(joogid)})
    }

  return (
    <div>joogid:
        {joogid.map((element, index) =>
            <div>
                <span>{element.nimi}</span>
                <button onClick={() => del(index)}>X</button>
            </div>)}
    </div>
  )
}

export default JoogiHaldus