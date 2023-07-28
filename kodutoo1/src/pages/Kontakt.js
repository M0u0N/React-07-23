import { useState } from "react";

function Kontakt() {
    const [aadress, m22raAadress] = useState("Tallinn");
    const [telefon, m22raTelefon] = useState("55123456");
    const [email, m22raEmail] = useState("aaa@aaa.com");
    const [ingliseKeelne, m22raIngliseKeelne] = useState("ei");

    function ingliseks() {
        m22raAadress("London");
        m22raTelefon("564654654564");
        m22raEmail("london@gmail.com");
        m22raIngliseKeelne("jah");
    }

    
    
    return ( 
    <div>
        <div>{aadress} </div> <br /> 
        <div>{telefon} </div> <br /> 
        <div>{email} </div> <br />
        <button onClick={ingliseks}>Muuda inglise keelseks</button>
        {ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
    </div> 
    );
}

export default Kontakt;