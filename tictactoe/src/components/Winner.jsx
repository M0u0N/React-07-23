import React, {useContext, useState} from 'react'
import { AppContext } from '../App'

function Winner() {

    const {winner} = useContext(AppContext)

  return (
    <div>Hey <span>{winner}</span>, you WON</div>
  )
}

export default Winner