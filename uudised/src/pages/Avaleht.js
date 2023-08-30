import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Avaleht() {
    const [postitused, uuendaPostitused] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => uuendaPostitused(data))
    }, []);

    return ( <div>
        <div>See on avaleht</div>  
        <img className="pilt" src="https://img.freepik.com/premium-vector/bird-colorful-logo-illustration_95635-223.jpg" alt="" />
        { postitused.map(element =>
            <div>
            <div><i>{element.userId}</i> </div>
            <div><u>{element.id}</u></div>
            <div><b>{element.title}</b></div>
            <div>{element.body}</div>
            <Link to={"kasutaja-postitus/" + element.userId}>
                <button>Kõik kasutaja postitused </button>
            </Link>
            <Link to={"vaata-postitus/" + element.id}>
                <button>Vaata postitust </button>
            </Link>
            </div> )}
    </div>
    );
}

export default Avaleht;