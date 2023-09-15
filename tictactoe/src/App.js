import {Route, Routes} from 'react-router-dom'

import Game from './pages/Game'
import Players from './pages/Players'
import ScoreBoard from './pages/ScoreBoard'

function App() {

  return(
    <div>
      <Routes>
        <Route path='' element={<Players/>} />
        <Route path='game' element={<Game/>} />
        <Route path='scoreboard' element={<ScoreBoard/>} />
      </Routes>

    </div>
  )

}
export default App;
