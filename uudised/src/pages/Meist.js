import {useState} from "react";


function Meist () {
    const [kontakt, n2itaKontakt] = useState("");



    return ( <div>
    <div>See on leht meist, localhost:3000/meist </div> 
    <img className="pilt" src="https://img.freepik.com/premium-vector/bird-colorful-logo-illustration_95635-223.jpg" alt="" />
    <div>Tänapäeva maamehe uudised, otse kesk eestist </div>
    <div>Meie töötajad</div>
    <br />

    <div>Andrus Uus</div>
    <div>Produtsent</div>
    <button onClick={() => n2itaKontakt("+65568456")}>Võta ühendust</button>
    <br /> <br />

    <div>Aigar Kase</div>
    <div>Reporter</div>
    <button onClick={() => n2itaKontakt("+6556297435")}>Võta ühendust</button>
    <br /> <br />

    <div>Kaia Uus</div>
    <div>Monteerija</div>
    <button onClick={() => n2itaKontakt("+6585476991")}>Võta ühendust</button>
    <br /> <br />

    <div>Sirje Mesilane</div>
    <div>Turu spetsialist</div>
    <button onClick={() => n2itaKontakt("+6556988777")}>Võta ühendust</button>
    <br /> <br />
    
    {kontakt !== "" &&<div>Tema kontakt: {kontakt} </div>}

    </div> 
    );
}

export default Meist ;