import React, { useState } from 'react'

function Uusleht() {
    const [staff, uuendaStaff] = useState(["shoes","shirts","socks","swaters","pigs","goats","sheep","spray","limit","elite","exueberant","destruction","present","March","Jan","Feb","Dec"])

    const del = (index) => {
        staff.splice(index, 1);
        uuendaStaff(staff.slice())
    }

    const empty = () => {
        staff.splice(0)
        uuendaStaff(staff.slice())
    }

    const sortAZ = () => {
        staff.sort();
        uuendaStaff(staff.slice())
    }

    const plus4 = () => {
        const vastus = staff.filter(element => element.length > 4);
        uuendaStaff(vastus);
    }


  return (
    <div>
        <div>Kokku on {staff.length} sõna </div>
        {staff.map((element, index) =>
            <div key={element}>
                {element} <button onClick={() => del(index)}>Kustuta sõna</button>
            </div>
        )}
        <button onClick={empty}>Tühjenda kõik</button>
        <button onClick={sortAZ}>Sorteeri A - Z</button>
        <button onClick={plus4}>Jäta alles pikemad kui 4 tähte</button>
    </div>
  )
}

export default Uusleht