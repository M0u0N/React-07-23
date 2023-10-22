import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return(
        <div>
            <div className='twn-header'>
                <button onClick={() => setOpen(!isOpen)} className='toggle-menu'>
                <FontAwesomeIcon icon={faBars} />
                </button>
                <img className='logo2' src="https://img.icons8.com/fluency/96/blueberry.png" alt="blueberry"/>
            </div>
            <div className='twn-menu'>
                <a href="/">
                    <img className='logo' width="96" height="96" src="https://img.icons8.com/fluency/96/blueberry.png" alt="blueberry"/>
                </a>
                <ul className='nav-link'>
                    <li className='nav-link'><Link to="/ordering">Tellimine</Link><i className="fa fa-question-circle" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/shop">Asukoht</Link><i className="fa fa-file" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/order-details">Kuidas tellida</Link><i className="fa fa-file" aria-hidden="true"></i></li>
                </ul>
            </div>
          {isOpen &&  <div className='twn-mobile'>
                <ul className='nav-link'>
                    <li className='nav-link'><Link to="/">tooted</Link><i className="fa fa-question-circle" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/ordering">tellimine</Link><i className="fa fa-question-circle" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/shop">asukoht</Link><i className="fa fa-file" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/order-details">Kuidas tellida</Link><i className="fa fa-file" aria-hidden="true"></i></li>
                </ul>
            </div>}
        </div>
    )
}

export default Navbar