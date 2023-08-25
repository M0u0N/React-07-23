import {Link} from 'react-router-dom'

function Uudised() {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];


    return ( <div>
        <div>See on uudiste leht,</div> 
        <img className="pilt" src="https://img.freepik.com/premium-vector/bird-colorful-logo-illustration_95635-223.jpg" alt="" />
        {uudised.length === 0 && <div>Uudiseid hetkel pole</div>}
        <div>{uudised.map((uudis, index) =>
            <Link to={'/uudis/' + index}>
             <div>{uudis}</div>
            </Link>
             )} 
             </div>
    </div>
    );
}

export default Uudised;