import React, { useState } from "react";

function Seaded() {
    const [keel, uuendaKeel] = useState("est");    
// let kasutaja = "vsdasdasd"; // let ---> lokaalne muutuja

  // const uuendaKasutaja = () => {
  //   kasutaja = "dasdasdsa";
  //   console.log(kasutaja); // <--- logidesse väljaprint      (print, System.out.println)
  // }


    return (  
    <div>
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