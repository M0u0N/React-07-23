import React, { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";
function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode); // iga nupuvajutus peab olema erinev(dünaamiline)
    uuendaOstukorv(ostukorv.slice());
  };

  const kustuta = (jrknr) => {
    ostukorv.splice(jrknr, 1);
    uuendaOstukorv(ostukorv.slice())
  };

  const tyhjenda = () => {
    ostukorv.splice(0);
    uuendaOstukorv(ostukorv.slice());
  };

  const arvutaOstukorviSumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} toodet</div>} <br />
      {ostukorv.map((toode, jrknr) => (
        <div key={jrknr}>
          {jrknr}
           <div>{toode.nimi}</div>
           <div>{toode.hind}</div>
           <img className="pilt" src={toode.pilt} alt=""/>
          <button onClick={() => lisa(toode)}>+</button>
          <button onClick={() => kustuta(jrknr)}>-</button>
        </div>
      ))}
      { ostukorv.length === 0 && (
        <>
          <div>Ostukorv on tühi</div>
          <Link to="/tooted">Tooteid valima</Link>
        </>
        )}
        {ostukorv.length > 0 && <div>Kogusumma: {arvutaOstukorviSumma()} €</div>}
    </div>
  );
}

export default Ostukorv;

// kus teen "npm start" - sinna tulevad koodivead
// kompileerimise vead ehk:
// 1. import tegemata
// 2. muutuja seos vale
// 3. HTML pole üks komplekt
// jnejne

// run-time error ehk käimasolemise error
// parem klõps -> inspect -> console
// 1. className --> väikse n tähega
// 2. URL vale
