import React, { useRef, useState } from 'react'
import andjateFail from '../Data/nimed.json'
import { Link } from 'react-router-dom';

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(andjateFail)
    const andjaRef = useRef();

    const FiltreeriM = () => {
        const vastus = andjad.filter(element => element.startsWith('M'));
        uuendaAndjad(vastus);
    }

    const Filter6Letter = () => {
        const vastus = andjad.filter(element => element.length === 6);
        uuendaAndjad(vastus);
    }

    const FilterEndY= () => {
        const vastus = andjad.filter(element => element.endsWith('y'));
        uuendaAndjad(vastus);
    }

    const sortZA = () => {
        andjad.sort();
        andjad.reverse();
        uuendaAndjad(andjad.slice());
    }
    
    const insertEST = () => {
        const vastus = andjad.map(element => "EST-" + element)
        uuendaAndjad(vastus)
    }

    const kustuta = (index) => {
        andjad.splice(index, 1);
        uuendaAndjad(andjad.slice());
    }

    const lisa = () => {
        andjad.push(andjaRef.current.value)
        uuendaAndjad(andjad.slice())
    }


    

  return (
    <div>
        <div>Kuva palju nimesid on .lenght abil: {andjad.length} tk </div>
        <button onClick={FiltreeriM}>Filtreeri M tähega algavad nimed </button>
        <button onClick={Filter6Letter}>Filtreeri 6 tähega nimed </button>
        <button onClick={FilterEndY}>Filtreeri Y tähega lõppevad nimed </button>
        <button onClick={sortZA}>Sorteeri Z - A </button>
        <button onClick={insertEST}>Kirjuta iga nime ette EST </button>
        {andjad.map((element, index) =>
            <div key={element}>
                <Link to={"/yks-andja/" + index}>
                {element} <button onClick={() => kustuta(index)}>Kustuta nimi</button>
                </Link>
            </div>
        )}
        <label>Lisa uus nimi Nimekirja</label> <br/>
        <input ref={andjaRef} type='text' /> <br/>
        <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default TagasisideAndjad