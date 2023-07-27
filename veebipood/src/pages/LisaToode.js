import React, {useRef, useState}  from 'react'



function LisaToode() {
  const[sonum, uuendaSonum] = useState("Lisa Toode!");
  const inputiluger = useRef();

  // function lisa () { } // ES5


  // ES6
const lisa = () => {
  if (inputiluger.current.value === "") {
    uuendaSonum("Tühja nimetusega tooded ei saa lisada!" )
  } else {
  uuendaSonum("Toode edukalt sisestatud: " + inputiluger.current.value);
  }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiluger} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>


    </div>
  )
}

export default LisaToode