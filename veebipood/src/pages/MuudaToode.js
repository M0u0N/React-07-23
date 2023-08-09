import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from '../data/tooted.json'

function MuudaToode() {
  const {index} = useParams();
  const leitud = tootedFailist[index];
  const nimiRef = useRef();
  const navigate = useNavigate();

  // use-d on Reacti HOOKid ehk Reacti erikood, selle abil React lihtsustab JavaScripti
  // Reeglid:
  // 1. kõik algavad use- eesliidesega
  // 2. kõik tuleb importida
  // 3. alati on sulg lõpus ehk ta tuleb käivitada
  // 4. ta ei tohi olla funktsiooni sees loodud
  // 5. ta ei tohi olla dünaamiliselt loodud (vahepeal pole loodud)

  const muuda = () => {
    tootedFailist[index] = nimiRef.current.value;
    navigate("/halda");
  }

  return (
    <div>
      <label>Tootenimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud} type='text'/> <br/>
      <button onClick={muuda}>Muuda</button> <br />



    </div>
  )
}

export default MuudaToode