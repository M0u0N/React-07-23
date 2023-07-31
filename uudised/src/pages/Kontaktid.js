import {useState} from "react";



function Kontaktid() {
    const [n2itaJ2rvamaa, muudaN2itaJ2rvamaa] = useState(false);
    const [n2itaTallinn, muudaN2itaTallinn] = useState(false);
    const [n2itaTartu, muudaN2itaTartu] = useState(false);





    return ( <div>
        <div>See on Kontaktide leht,</div>
        <img className="pilt" src="https://img.freepik.com/premium-vector/bird-colorful-logo-illustration_95635-223.jpg" alt="" />
        <div>Võtke meiega ühendust</div>
        <div>Numbri nägemiseks vajutage kontori peale</div>
        <br />
        <div className={n2itaJ2rvamaa === true ? "valitud": undefined} onClick={() => muudaN2itaJ2rvamaa(!n2itaJ2rvamaa)}>Järvamaa Kontor </div>
        {n2itaJ2rvamaa && <div className="valitud">telefoni number: +7566312888 </div>}
        <div className={n2itaJ2rvamaa === true ? "valitud": undefined}>Pikk tn 7 </div>
        <br />
        <div className={n2itaTallinn === true ? "valitud": undefined} onClick={() => muudaN2itaTallinn(!n2itaTallinn)}> Tallinna Kontor </div>
        {n2itaTallinn && <div className="valitud">telefoni number: +7556894220 </div>}
        <div className={n2itaTallinn === true ? "valitud": undefined}>Lai tn 7 </div>
        <br />
        <div className={n2itaTartu === true ? "valitud": undefined} onClick={() => muudaN2itaTartu(!n2itaTartu)}>Tartu Kontor </div>
        {n2itaTartu && <div className="valitud">telefoni number: +7598563221 </div>}
        <div className={n2itaTartu === true ? "valitud": undefined}>Gonsori tn 7 </div>
        <br />
        <div>Saatke sisse uudiseid:</div>
        <div>Maakauudised@gmail.com</div>
        <br />
        <div>Kasutajatugi:</div>
        <div>Maakatugi@gmail.com </div>
    
    </div>
    );
}

export default Kontaktid;