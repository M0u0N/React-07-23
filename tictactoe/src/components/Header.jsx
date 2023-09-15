import React, {useContext,} from 'react'
import { AppContext } from '../pages/Game'
import "../style/header.css"
import Playing from "./Playing"
import End from "./End"
import Winner from "./Winner"

function Header() {

    const {winner, gameOver} = useContext(AppContext)
    

  return (
    <div className='header'>
        {!winner && !gameOver && <Playing/>}
        {gameOver && !winner && <End/>}
        {winner && <Winner/>}
    </div>
  )
}

export default Header