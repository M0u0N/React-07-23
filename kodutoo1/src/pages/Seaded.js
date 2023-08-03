import React, { useState } from "react";

function Seaded() {
    const [keel, uuendaKeel] = useState("est");
    const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"))    
// let kasutaja = "vsdasdasd"; // let ---> lokaalne muutuja

  // const uuendaKasutaja = () => {
  //   kasutaja = "dasdasdsa";
  //   console.log(kasutaja); // <--- logidesse väljaprint      (print, System.out.println)
  // }

    const tumeLeht = () => {
        localStorage.setItem("veebilehe_kujundus","dark-mode")
        muudaKujundus("dark-mode")
    }
    const heleLeht = () => {
        localStorage.setItem("veebilehe_kujundus","light-mode")
        muudaKujundus("light-mode")
    }


    return (  
    <div className={kujundus === "dark-mode" ? "dark-mode" : "light-mode" }>

        {
        kujundus === "dark-mode" ?
        <button onClick={heleLeht}>Hele leht</button>:
        <button onClick={tumeLeht}>Tume leht</button>
        }

        {kujundus==="dark-mode" && <div>TUME LEHT </div>}
        {kujundus==="light-mode" && <div>HELE LEHT </div>}

        <button onClick={() => uuendaKeel("est")}>Eesti keelseks</button>
        <button onClick={() => uuendaKeel("eng")}>To English</button>
        <button onClick={() => uuendaKeel("rus")}>Pycckuj</button>
        {keel === "est" && <div>Leht on eesti keelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Pycckuj jasök</div>}
    </div>
    );
}

export default Seaded;