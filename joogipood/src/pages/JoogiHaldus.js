import React from 'react'
import {useState,} from 'react'
import joogidFail from '../data/joogid.json'

function JoogiHaldus() {
    const [joogid, muudaJoogid] = useState(joogidFail)

    const del = (index) => {
        joogidFail.splice(index, 1);
        muudaJoogid(joogidFail.slice())
    }

  return (
    <div>
        {joogid.map((element, index) =>
            <div key={element}>
                {element} <button onClick={() => del(index)}>X</button>
            </div>
        )}

    </div>
  )
}

export default JoogiHaldus