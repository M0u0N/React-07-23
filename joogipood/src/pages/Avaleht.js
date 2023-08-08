import React from 'react'
import {useState, useRef} from 'react'
import joogidFail from '../data/joogid.json'


function Avaleht() {
    const[joogid, muudaJoogid] = useState(joogidFail)

  return (
    <div>joogid:
        {joogid.map((element) =>
            <div>
                <span>{element}</span>
            </div>)}



    </div>
  )
}

export default Avaleht