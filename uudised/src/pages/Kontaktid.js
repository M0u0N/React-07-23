import {useState} from "react";



function Kontaktid() {
    const [n2itaJ2rvamaa, muudaN2itaJ2rvamaa] = useState(false);
    const [n2itaTallinn, muudaN2itaTallinn] = useState(false);
    const [n2itaTartu, muudaN2itaTartu] = useState(false);





    return ( <div>
        <div>See on Kontaktide leht, localhost:3000/kontaktid</div>
        <img className="pilt" src="https://img.freepik.com/premium-vector/bird-colorful-logo-illustration_95635-223.jpg" alt="" />
        <div>Võtke meiega ühendust</div>
        <div>Numbri nägemiseks vajutage kontori peale</div>
        <br />
        <div onClick={() => muudaN2itaJ2rvamaa(!n2itaJ2rvamaa)}>Järvamaa Kontor </div>
        {n2itaJ2rvamaa && <div>telefoni number: +7566312888 </div>}
        <div>Pikk tn 7 </div>
        <br />
        <div onClick={() => muudaN2itaTallinn(!n2itaTallinn)}> Tallinna Kontor </div>
        {n2itaTallinn && <div>telefoni number: +7556894220 </div>}
        <div>Lai tn 7 </div>
        <br />
        <div onClick={() => muudaN2itaTartu(!n2itaTartu)}>Tartu Kontor </div>
        {n2itaTartu && <div>telefoni number: +7598563221 </div>}
        <div>Gonsori tn 7 </div>
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