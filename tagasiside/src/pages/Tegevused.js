import React from 'react'
import { useState } from 'react'
import tegevusteFail from '../Data/tegevused.json'

function Tegevused() {
    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    const n2itaKasutajaYks = () => {
        const vastus = tegevused.filter(element => element.userId ===1);
        uuendaTegevused(vastus);
    }

    const n2itaKasutajaKaks = () => {
        const vastus = tegevused.filter(element => element.userId ===2);
        uuendaTegevused(vastus);
    }
    const n2itaKasutajaKolm = () => {
        const vastus = tegevused.filter(element => element.userId ===3);
        uuendaTegevused(vastus);
    }

    const n2itaValmis = () => {
        const vastus = tegevused.filter(element => element.completed === true);
        uuendaTegevused(vastus);
    }

    const n2itaMitteValmis = () => {
        const vastus = tegevused.filter(element => element.completed === false);
        uuendaTegevused(vastus);
    }

    const n2itaAlgusT = () => {
        const vastus = tegevused.filter(element => element.title.startsWith("t"));
        uuendaTegevused(vastus);
    }

    const n2itaM2rgid20pluss = () => {
        const vastus = tegevused.filter(element => element.title.length > 20);
        uuendaTegevused(vastus);
    }


    const n2itaK6ik = () => {
        uuendaTegevused(tegevusteFail)
    }




  return (
    <div>
        <div>Näita kogu tegevuse arvu {tegevused.length} abil</div>
        <button onClick={() => n2itaKasutajaYks()}>Kuva kõik kasutaja ID 1 tegevused</button>
        <button onClick={() => n2itaKasutajaKaks()}>Kuva kõik kasutaja ID 2 tegevused</button>
        <button onClick={() => n2itaKasutajaKolm()}>Kuva kõik kasutaja ID 3 tegevused</button>
        <button onClick={() => n2itaValmis()}>Kuva kõik valmis tegevused</button>
        <button onClick={() => n2itaMitteValmis()}>Kuva kõik mittevalmis tegevused</button>
        <button onClick={() => n2itaAlgusT()}>Kuva kõik "t" tähega algavad tegevused</button>
        <button onClick={() => n2itaM2rgid20pluss()}>Kuva tegevused, millel on tähemärke rohkem kui 20</button>
        <button onClick={() => n2itaK6ik()}>Kuva kõik tegevused tagasi</button>
    {tegevused.map(element =>
    <div>
        <div>{element.userId}</div>
        <div>{element.id}</div>
        <div>{element.title}</div>
        <div>{element.completed}</div>
        <br />
    </div>)}
    </div>
  );
}

export default Tegevused