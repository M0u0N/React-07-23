import React, { useState, } from "react";
import {Link} from 'react-router-dom'

function HaldaUudised() {
  const [uudised, uuendaUudised ] = useState(JSON.parse(localStorage.getItem("uudised")) || []);

  const kustuta = (index) => {
    uudised.splice(index, 1)
    uuendaUudised(uudised.slice());
    localStorage.setItem("uudised", JSON.stringify(uudised));
  }

  return (
    <div>
      <div>{uudised.map((uudis, index ) => 
        <div>
        <div>{uudis}</div>
        <button onClick={() => kustuta(index)}>x</button>
        <Link to={'/muuda/' + index }>
          <button>Muuda</button>
        </Link>

        </div>
      )}</div>
    </div>
  );
}

export default HaldaUudised;
