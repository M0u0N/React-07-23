import React, { useState, useRef } from 'react'

function Tagasiside() {
    const [tagasisided, uuendaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])
    const tagasisideRef = useRef();

    const remove = (ind) => {
        tagasisided.splice(ind, 1);
        uuendaTagasisided(tagasisided.slice())
    }
 
    const uusTagasiside = () => {
        tagasisided.push(tagasisideRef.current.value);
        uuendaTagasisided(tagasisided.slice());
    }




  return (
    <div>
        <div>Tagasisided: </div> <br />
        {tagasisided.map((tagasiside, ind) => (
        <div>
          <span>{tagasiside} </span>
          <button onClick={() => remove(ind)}>X</button>
        </div>
      ))}
        <br />
        <label>Lisa uus tagasiside: </label>
        <input ref={tagasisideRef} type="text" />
        <button onClick={() => uusTagasiside()}>Sisesta</button>




    </div>
  )
}

export default Tagasiside