import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return(
        <div>
            <div className='twn-header'>
                <button onClick={() => setOpen(!isOpen)} className='toggle-menu'>
                    <i></i>
                </button>
            </div>
            <div className='twn-menu'>
                <img className='logo' src={require("../assets/imgs/logo.svg").default} alt='logo' />
                <ul className='nav-link'>
                    <li className='nav-link'><Link to="/intro">Nõuded</Link><i className="fa fa-question-circle" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/article">Artikkel</Link><i className="fa fa-file" aria-hidden="true"></i></li>
                    <li className='nav-link'><Link to="/list">Tabel</Link><i className="fa fa-table" aria-hidden="true"></i></li>
                </ul>
            </div>
          {isOpen &&  <div className='twn-mobile'>
                <img className='logo' src={require("../assets/imgs/logo.svg").default} alt='logo' />
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