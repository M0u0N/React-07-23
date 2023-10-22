import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function OrderDetails() {
  return (
    <div className='order-details'>
        <h2>Kuidas meie lehelt tellida</h2>
      <p>
        Kõik tooted meie lehel on värsked ja äsja korjatud. <br />
        Sellepärast tuleb ette esitada tellimus oma kontakt andmetega siin: <Link to={"/ordering"}>TELLIMINE</Link> , et me saaks teiega ühendust võtta kui meie lattu saabuvad värsked tooted <br />
        Maksimine toodete eest toimub sularahas, kauba kättesaamisel (kui ei toimu muud kokkulepet)
      </p>
      <h2>Kauba kättesaamine</h2>
      <p>
        * Kaubale tuleb järgi tulla ise  <br />
        * Aadressi leiab nupult <Link to={"/shop"}>ASUKOHT</Link> <br />
        * Lisatasu eest on võimalik kauba transport (2€/km Eesti piires) <br />
      </p>
    </div>
  )
}

export default OrderDetails
