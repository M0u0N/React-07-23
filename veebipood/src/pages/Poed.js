import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json"
import {Link} from 'react-router-dom'

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);
    const poodViide = useRef();
    const telViide = useRef();
    const aegViide = useRef();

    const reset = () => {
        uuendaPoed (poedFailist);
    }

    const sorteeriAZ = () => {
        poed.sort((a, b) => a.nimi.localeCompare(b.nimi, "et"));
        uuendaPoed(poed.slice())
    }

    const sorteeriZA = () => {
        poed.sort((a, b) => b.nimi.localeCompare(a.nimi, "et"));
        uuendaPoed(poed.slice())

    }

    const sorteeriTahtedeArvKasv = () => {
        poed.sort((a, b) => a.nimi.length - b.nimi.length);
        uuendaPoed(poed.slice())
    }

    const sorteeriTahtedeArvKah = () => {
        poed.sort((a, b) => b.nimi.length - a.nimi.length);
        uuendaPoed(poed.slice())
    }

    const sorteeriKolmasTahtAZ = () => {
        poed.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2])); //esimene tähekoht on võrdne 0, teine = 1, komas = 2 jne
        uuendaPoed(poed.slice())
    }
 

    const filtreeriEgaLoppevad = () => {
        const vastus = poed.filter(yksPood => yksPood.nimi.endsWith("e"));
        uuendaPoed(vastus);
    }

    
    const filtreeri9Tahelised = () => {
        const vastus = poed.filter(yksPood => yksPood.nimi.length === 9);
        uuendaPoed(vastus);
    }

    
    const filtreeriVahemalt7Tahelised = () => {
        const vastus = poed.filter(yksPood => yksPood.nimi.length >= 7);
        uuendaPoed(vastus);
    }

    
    const filtreeriKesSisaldabISLuhendit = () => {
        const vastus = poed.filter(yksPood => yksPood.nimi.includes("is"));
        uuendaPoed(vastus);
    }

    
    const filtreeriKelleKolmasTahtI = () => {
        const vastus = poed.filter(yksPood => yksPood.nimi[2] === "i");
        uuendaPoed(vastus);
    }


    const arvutakokku = () =>  {
        let summa = 0;
        poed.forEach(ykspood => summa = summa + ykspood.nimi.length)
        return summa;
    }

    const lisa = () => {
        poed.push({"nimi": poodViide.current.value, "aeg": aegViide.current.value, "tel:":  telViide.current.value});
        uuendaPoed(poed.slice());
    }

    const kustuta = (index) => {
        poedFailist.splice(index,1);
        uuendaPoed(poedFailist.slice());
    }


  return (
    <div>
        <button onClick={reset}>Reset</button>
        <div>Poode: {poed.length} tk </div>
        <div>Tähemärke:  {arvutakokku()} tk </div>

        <br /> 
        <label>Poe Nimi</label> <br /> 
        <input ref={poodViide} type="text" /> <br />
        <label>Poe lahti oleku aeg</label> <br /> 
        <input ref={aegViide} type="text" /> <br />
        <label>Telefoninumber</label> <br /> 
        <input ref={telViide} type="text" /> <br />
        <button onClick={lisa}>Lisa</button>  <br/>  <br/>
 


        <button onClick={sorteeriAZ}>Sorteeri A - Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z - A</button>
        <button onClick={sorteeriTahtedeArvKasv}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahtedeArvKah}>Sorteeri tähtede arv kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A - Z</button>
        <br></br>
        <button onClick={filtreeriEgaLoppevad}>Filtreeri E-ga lõppevad</button>
        <button onClick={filtreeri9Tahelised}>Filtreeri 9 tähelised</button>
        <button onClick={filtreeriVahemalt7Tahelised}>Filtreeri vähemalt 7 tähelised</button>
        <button onClick={filtreeriKesSisaldabISLuhendit}>Jäta alles 'is' lühendiga</button>
        <button onClick={filtreeriKelleKolmasTahtI}>Filtreeri kelle kolmas täht I</button>
        {poed.map((yksPood, index) => (
        <div key={yksPood.nimi}> 
            <Link to={"/yks-pood/" + index}>
            {yksPood.nimi} {" "}
            <button onClick={() => kustuta(index)}>x</button>
            </Link>
        </div>))}

    </div>
  )
}

export default Poed