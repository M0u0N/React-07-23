import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom'
import '../style/Players.css'
import { PlayerContext } from '../context/PlayerContext';



function Players() {
    const [players, setPlayers] = useState([
        {name: '', score: 0},
        {name: '', score: 0}
    ]);

    const player1Ref = useRef()
    const player2Ref = useRef()

const addPlayers = () => {
    const Player1 = player1Ref.current.value;
    const Player2 = player2Ref.current.value;
       setPlayers([
        {name: Player1, score: 0},
        {name: Player2, score: 0},
    ]);
    };

  return (
    <div className='players-container'>
        <div className='input-group'>
            <label>player 1</label> <br/>
            <input ref={player1Ref}  type="text" /> <br/> <br/>
        </div>

        <div className='input-group'>
            <label>player 2</label><br/>
            <input ref={player2Ref}  type="text" /><br/>
        </div>

        <div className='button-container3'>
        <Link to="/game" onClick={addPlayers}>
            Start game
        </Link>
        </div>
    </div>
  )
}

export default Players