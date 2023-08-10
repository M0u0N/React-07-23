import { useState} from 'react'

function Avaleht() {
    const tegelased = [
        {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland"},
        {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Woods"},
        {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Woods"},
        {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal cove"},
    ]

    const [klikitudNimi, uuendaKlikitudNimi] = useState("");

    const kuvaNimi = (tegelane) => {
        uuendaKlikitudNimi(tegelane.eesnimi)
    }


    return (
     <div>
        {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
        {tegelased.map(tegelane =>
        <div>
            <div>{tegelane.eesnimi}</div>
            <div>{tegelane.perenimi}</div>
            <div>{tegelane.elukoht}</div>
            <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
            <br />
        </div>)} 
    </div>
     );
}

export default Avaleht;