import React, {useContext, useState} from 'react'
import { AppContext } from '../pages/Game'
import { PlayerContext } from '../context/PlayerContext'

function Winner() {

    const {winner} = useContext(AppContext)
    const {players} = useContext(PlayerContext)

  if (winner === "X"){
    players.p1Score = players.p1Score + 0.5
    return <div>Hey <span>{players.p1}</span>, you WON</div>
  } else if (winner === "O"){
    players.p2Score = players.p2Score + 0.5
    return <div>Hey <span>{players.p2}</span>, you WON</div>
  } 

}

export default Winner