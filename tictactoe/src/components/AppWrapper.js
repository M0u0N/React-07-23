import React from 'react'
import { PlayerContext } from '../pages/Players'
import App from '../pages/Game'

function AppWrapper() {
  return (
    <PlayerContext>
        <App/>
    </PlayerContext>
  )
}

export default AppWrapper