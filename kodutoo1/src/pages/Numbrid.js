import React, { useState } from 'react'

function Numbrid() {
    const [numbrid, uuendaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 2342, 662])

    const reset = () => {
        uuendaNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 135, 2342, 662])
    }
 
    const sortGrow = () => {
        numbrid.sort((a, b) => a - b);
    uuendaNumbrid(numbrid.slice())
    }

    const sortDecr = () => {
        numbrid.sort((a, b) => b - a);
    uuendaNumbrid(numbrid.slice())
    }

    const alphaOrder= () => {
        numbrid.sort((a,b) => a.toString().localeCompare(b.toString()));
    uuendaNumbrid(numbrid.slice())
    }

    const alphaOrderRev= () => {
        numbrid.sort((a,b) => b.toString().localeCompare(a.toString()));
    uuendaNumbrid(numbrid.slice())
    }

    const filter= () => {
       const vastus = numbrid.filter(nbr => nbr > 8)
    uuendaNumbrid(vastus)
    }

    const filterLesser10= () => {
        const vastus = numbrid.filter(nbr => nbr < 10)
     uuendaNumbrid(vastus)
     }

     const filterPaaris= () => {
        const vastus = numbrid.filter(nbr => nbr % 2 === 0)
     uuendaNumbrid(vastus)
     }

     const filterNonPaaris= () => {
        const vastus = numbrid.filter(nbr => nbr % 2 !== 0)
     uuendaNumbrid(vastus)
     }
    
     const filter1Start = () => {
        const vastus = numbrid.filter(nbr => nbr.toString().startsWith('1'));
     uuendaNumbrid(vastus);
     }

     const filterIncludes3 = () => {
        const vastus = numbrid.filter(nbr => nbr.toString().includes('3'));
     uuendaNumbrid(vastus);
     }



  return (
    <div>
        <button onClick={reset}>Reset</button>
        <button onClick={sortGrow} >Sorteeri suurenedes</button>
        <button onClick={sortDecr} >Sorteeri Vähenedes</button>
        <button onClick={alphaOrder} >Sorteeri tähestiku järjekorras</button>
        <button onClick={alphaOrderRev} >Sorteeri tähestiku järjekorras tagurpidi</button>
        <br></br>
        <button onClick={filter} >Filtreeri suuremad kui 8</button>
        <button onClick={filterLesser10} >Filtreeri väiksemad kui 10</button>
        <button onClick={filterPaaris} >Filtreeri paaris arvud</button>
        <button onClick={filterNonPaaris} >Filtreeri paaritud arvud</button>
        <button onClick={filter1Start} >Filtreeri 1-ga algavad arvud</button>
        <button onClick={filterIncludes3} >Filtreeri 3 sisaldavad arvud</button>


        {numbrid.map(nbr => <div>Maksumus: {nbr} €</div>)}
        
    </div>
  )
}

export default Numbrid