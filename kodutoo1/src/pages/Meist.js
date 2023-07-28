import { useState } from "react";
import { Link } from "react-router-dom";

function Meist() {
    const[message, m22raMessage] = useState("Vali mõni tegevus")




    return ( 
    <div>
        <div>{message}</div>
        <button onClick={() => m22raMessage("Saatke kandideerimis avaldus mailile: jobs@html-css.com")}>Kandideeri tööle</button>
        <button onClick={() => m22raMessage("Meil on 10 töötaja, kelle info ilmub veebilehele lähiajal")}>Vaata meie töötajaid</button>
        <button onClick={() => m22raMessage("Ühenduse võtmiseks minge lehele kontakt")}>Võta meiega ühendust</button>
        
        <Link to="/kontakt">
        <button>Kontakt</button>
        </Link>

    </div>
     );
}

export default Meist;
