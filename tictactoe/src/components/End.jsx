import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { AppContext } from '../pages/Game'

function End() {
  const {players} = useContext(PlayerContext)
  const {winner} = useContext(AppContext)

  if (winner === ""){
    players.Draws = players.Draws +0.5
  }

  return (
    <div>Draw</div>
  )
}

export default End