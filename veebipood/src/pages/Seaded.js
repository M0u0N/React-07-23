import React, { useState } from "react";

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel"));    
// let kasutaja = "vsdasdasd"; // let ---> lokaalne muutuja

  // const uuendaKasutaja = () => {
  //   kasutaja = "dasdasdsa";
  //   console.log(kasutaja); // <--- logidesse väljaprint      (print, System.out.println)
  // }


    return (  
    <div>
        <button onClick={() => uuendaKeel("est") & localStorage.setItem("keel", "est" )}> Eesti keelseks</button>
        <button onClick={() => uuendaKeel("eng") & localStorage.setItem("keel", "eng" )}>To English</button>
        <button onClick={() => uuendaKeel("rus") & localStorage.setItem("keel", "rus" )}>Pycckuj</button>
        {keel === "est" && <div>Leht on eesti keelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Pycckuj jasök</div>}
    </div>
    );
}

export default Seaded;