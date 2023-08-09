import React, {useRef, useState}  from 'react'
import tootedFailist from "../data/tooted.json"
import { ToastContainer, toast } from 'react-toastify';


// kahe faili omavaheline suhtlus
// 1. Failist. -> lihtne - refreshiga kaob
// 2. Brauer -> lihtsam kui andmebaas - tooteid ei panda päriselt brauserisse
// 3. Andmebaas -> nii on õige -raske
// 4. Context (globaalne muutuja) -> nii on õige - raske -refreshiga kaob




function LisaToode() {
  const[sonum, uuendaSonum] = useState("Lisa Toode!");
  const inputiluger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  // function lisa () { } // ES5


  // ES6
const lisa = () => {
  if (inputiluger.current.value === "") {
    uuendaSonum("Tühja nimetusega tooded ei saa lisada!" )
    toast.error("Tühja nimetusega tooded ei saa lisada! ")
  } else {
  uuendaSonum("Toode edukalt lisatud: " + inputiluger.current.value);
  toast.success("Toode edukalt lisatud: " + inputiluger.current.value )
  tootedFailist.push({
    nimi: inputiluger.current.value,
    hind: Number(hindRef.current.value),
    pilt: piltRef.current.value,
    aktiivne: aktiivneRef.current.checked });
  }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiluger} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Toode aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Lisa</button>


      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      
      />  

    </div>
  )
}

export default LisaToode