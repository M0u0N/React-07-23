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
                <img className='logo2'  src="https://img.icons8.com/fluency/96/blueberry.png" alt="blueberry"/>
            </div>
            <div className='twn-menu'>
                <img className='logo' width="96" height="96" src="https://img.icons8.com/fluency/96/blueberry.png" alt="blueberry"/>
                <ul className='nav-link'>
                    <li className='nav-link'><Link to="/intro">Nõuded</Link><i className="fa fa-question-circle" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/article">Artikkel</Link><i className="fa fa-file" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/list">Tabel</Link><i className="fa fa-table" aria-hidden="true"></i></li>
                </ul>
            </div>
          {isOpen &&  <div className='twn-mobile'>
                <ul className='nav-link'>
                    <li className='nav-link'><Link to="/intro">Nõuded</Link><i className="fa fa-question-circle" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/article">Artikkel</Link><i className="fa fa-file" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/list">Tabel</Link><i className="fa fa-table" aria-hidden="true"></i></li>
                </ul>
            </div>}
        </div>
    )
}

export default Navbar