import React, { useState } from 'react'

function Avaleht() {       // muudmoodi ei saaagi vääärtusi muuta HTMLs kui useState
  const [kogus, uuendaKogus] = useState(10);  // Reacti hook ehk reaci erikood. Muudab väärtusi HTMLs
  const [laigitud, uuendaLaigitud] = useState(false); //kahendväärtus ehk boolean
  const [sonum, uuendaSonum] = useState("Uuenda Kogust!");


  function nulli () { //---------
    uuendaKogus(0);
    uuendaSonum("Panid tagasi nulli!");
    } //-----------

  function vahenda () {
      uuendaKogus(kogus - 1);
      uuendaSonum("Vähendasid kogust!");
    }

  function suurenda () {
        uuendaKogus(kogus + 1);
        uuendaSonum("Suurendasid kogust!");
    }


  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <span>{laigitud}</span>
      { laigitud === true && <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda mittelaigituks</button> }
      { laigitud === false && <button onClick={() => uuendaLaigitud(true)} >Muuda laigituks</button>}

      <br></br>
      <div>{sonum}</div>


      { kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button> }
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht


// HTML:
// tumesinine - sissekirjutatud tüüp - tag: img, button, div, span
// tavaline sinine - muutujad HTMLs
// helesinine - tagi atribuudid (omadused): onClick, className, src, alt, path, element, to
// kollane - funktsioon
// valge - väljanäidatav, märgid
// oranž/punane - sõna, jutumärkide vahel
// roheline - suure tähega roheline - imporditud tag, peab olema import: <Avaleht />   <BrowserRouter /> <Route />

// JavaScript:
// tumesinine - sissekirjutatud tüüp - reserveeritud sõnad: const, let, function, true, false, undefined, null
// tavaline sinine - muutujad
// helesinine - muutuja võtmed (omadused): ref.current.value    .length
// kollane - funktsioon
// valge - märgid
// oranž/punane - sõna, jutumärkide vahel
// roheline - suure tähega roheline - imporditud klass
