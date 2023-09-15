import React, {useContext, useState} from 'react'
import { AppContext } from '../pages/Game'

function Winner() {

    const {winner} = useContext(AppContext)

  return (
    <div>Hey <span>{winner}</span>, you WON</div>
  )
}

export default Winner