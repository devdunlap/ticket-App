import React from 'react'
import TicketApp from './Components/TicketApp/TicketApp'
import team from './Data/team'

const App = () => {
  
  return (
    <div>
      <TicketApp team ={team}/>
      </div>
  )
}

export default App