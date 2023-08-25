import { useState} from 'react'

function Avaleht() {
    // const tegelased = [
    //     {eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland", vanus: 25},
    //     {eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland", vanus: 25},
    //     {eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Woods", vanus: 20},
    //     {eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Woods", vanus: 9},
    //     {eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal cove", vanus: 7},
    // ]
    const tegelased = JSON.parse(localStorage.getItem("tegelased")) || [];
    const [klikitudNimi, uuendaKlikitudNimi] = useState("");

    const kuvaNimi = (tegelane) => {
        uuendaKlikitudNimi(tegelane.eesnimi)
    }

    const valiTegelane = (klikitudTegelane) => {
        let valitudLS = localStorage.getItem("valitudTegelased");
        valitudLS = JSON.parse(valitudLS) || [];
        valitudLS.push(klikitudTegelane);
        valitudLS = JSON.stringify(valitudLS);
        localStorage.setItem("valitudTegelased", valitudLS)
    }


    return (
     <div>
        {klikitudNimi !== "" && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
        {tegelased.map(tegelane =>
        <div>
            <div>{tegelane.eesnimi}</div>
            <div>{tegelane.perenimi}</div>
            <div>{tegelane.elukoht}</div>
            <div>{tegelane.vanus}</div>
            <button onClick={() => valiTegelane(tegelane)}>Vali Tegelane</button>
            <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
            <br />
        </div>)} 
    </div>
     );
}

export default Avaleht;