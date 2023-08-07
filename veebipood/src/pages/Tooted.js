import React, { useState } from "react";
import ostukorvFailist from "../data/ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../data/tooted.json"


function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
    toast.success("Edukalt ostukorvi lisatud!");
    uuendaTooted(tootedFailist.slice())
  }

  return (
    <div>
      {tooted.map((toode) => 
        <div>
          {toode}{" "}
          <button onClick={() => lisaOstukorvi(toode)}>Lisa Ostukorvi</button>
        </div>
      )}
      <ToastContainer
        position="top-right"
        theme="dark"
      
      />  
    </div>
  );
}

export default Tooted;
