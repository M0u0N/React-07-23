import React, { useState } from 'react'

function Poed() {
    const [poed, uuendaPoed] = useState(["Ülemiste","Ämari","Viimsi","Rocca al Mare","Magistrali","Vesse","Kristiine","Järveotsa",]);

    const reset = () => {
        uuendaPoed (["Ülemiste","Ämari","Viimsi","Rocca al Mare","Magistrali","Vesse","Kristiine","Järveotsa",]);
    }

    const sorteeriAZ = () => {
        poed.sort((a, b) => a.localeCompare(b));
        uuendaPoed(poed.slice())
    }

    const sorteeriZA = () => {
        poed.sort((a, b) => b.localeCompare(a));
        uuendaPoed(poed.slice())

    }

    const sorteeriTahtedeArvKasv = () => {
        poed.sort((a, b) => a.length - b.length);
        uuendaPoed(poed.slice())
    }

    const sorteeriTahtedeArvKah = () => {
        poed.sort((a, b) => b.length - a.length);
        uuendaPoed(poed.slice())
    }

    const sorteeriKolmasTahtAZ = () => {
        poed.sort((a, b) => a[2].localeCompare(b[2])); //esimene tähekoht on võrdne 0, teine = 1, komas = 2 jne
        uuendaPoed(poed.slice())
    }
 

    const filtreeriEgaLoppevad = () => {
        const vastus = poed.filter(yksPood => yksPood.endsWith("e"));
        uuendaPoed(vastus);
    }

    
    const filtreeri9Tahelised = () => {
        const vastus = poed.filter(yksPood => yksPood.length === 9);
        uuendaPoed(vastus);
    }

    
    const filtreeriVahemalt7Tahelised = () => {
        const vastus = poed.filter(yksPood => yksPood.length >= 7);
        uuendaPoed(vastus);
    }

    
    const filtreeriKesSisaldabISLuhendit = () => {
        const vastus = poed.filter(yksPood => yksPood.includes("is"));
        uuendaPoed(vastus);
    }

    
    const filtreeriKelleKolmasTahtI = () => {
        const vastus = poed.filter(yksPood => yksPood[2] === "i");
        uuendaPoed(vastus);
    }




  return (
    <div>
        <button onClick={reset}>Reset</button>
        <div>Poode: {poed.length} tk </div>
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
        {poed.map(yksPood => <div>{yksPood}</div>)} 

    </div>
  )
}

export default Poed