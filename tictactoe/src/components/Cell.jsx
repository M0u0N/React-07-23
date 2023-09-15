import React, {useContext} from 'react'
import { AppContext } from '../pages/Game'
import "../style/cell.css"

function Cell({row, column}) {
    const {cells, cellClick, gameOver, winnerCells} = useContext(AppContext)
    const currentVal = cells[row][column]

    return (
    <div
      className={`cell ${
        currentVal === 'X' ? 'X' : currentVal === 'O' ? 'O' : ''
      } ${winnerCells[row][column] ? 'winner' : ''} ${
        gameOver ? 'disabled' : 'active'
      }`}
      onClick={() => cellClick(row, column)}
    >
      <div>{currentVal}</div>
    </div>
  );
}

export default Cell