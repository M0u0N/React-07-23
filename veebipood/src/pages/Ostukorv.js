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

  return (
    <div>
      <button onClick={tyhjenda}>Tühjenda</button>
      {ostukorv.map((toode, jrknr) => (
        <div>
          {jrknr} {toode} {" "}
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
