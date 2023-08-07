import React, { useState } from "react";
import TootedFailist from "../data/tooted.json";

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(TootedFailist);

  const kustuta = (jrknr) => {
    TootedFailist.splice(jrknr, 1);
    uuendaTooted(TootedFailist.slice());
    }

  return (
    <div>
      {tooted.map((toode, jrknr) => (
        <div>
            {toode}{" "}
            <button onClick={() => kustuta(jrknr)}>Kustuta</button>
        </div>
      ))}
    </div>
  );
}

export default HaldaTooted;
