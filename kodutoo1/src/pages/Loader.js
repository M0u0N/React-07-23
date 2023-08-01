import React, { useState } from 'react'

function Loader() {
    const [kasLaeb, uuendaLaadimist] = useState(true);

  return (
    <div>
        {kasLaeb === true && <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
        <button onClick={() => uuendaLaadimist(false)}>Lõpeta laadimine</button>
        <button onClick={() => uuendaLaadimist(true)}>Alusta laadimist</button>
    </div>
  )
}

export default Loader