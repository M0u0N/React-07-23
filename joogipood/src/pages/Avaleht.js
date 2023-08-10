import React from 'react'
import {useState, useRef,} from 'react'
import joogidFail from '../data/joogid.json'
import { Link } from 'react-router-dom'



function Avaleht() {
    const[joogid, muudaJoogid] = useState(joogidFail)

  return (
    <div>joogid:
      {joogid.map((element, index) =>
          <div>
            <Link to={"/jook/" + index}>
              <span>{element}</span>
            </Link>
            </div>)}
    </div>
  )
}

export default Avaleht