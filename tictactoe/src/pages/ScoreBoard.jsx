import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { PlayerContext } from './Players'

function ScoreBoard() {
    const {players} = useContext(PlayerContext)
  return (
    <div>
        <h2>Scoreboard</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name}: {player.score}
          </li>
        ))}
      </ul>
      
    <div className='button-container'>
        <Link to="/game" className='button' >
            Board
        </Link>
        </div>

    </div>
  )
}

export default ScoreBoard