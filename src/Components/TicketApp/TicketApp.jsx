import React, {useState} from 'react'
// import team from '../../data/team.json'
import Counter from '../Counter/Counter'
import '../TicketApp.scss'
const TicketApp = (props) => {
 
  const { team } = props
  


  const mappedTeam = team.map((member) => {
  
    const { name, role } = member

    
    

    return (
    <div className='membercard'>
    <h1>{name}</h1>
    <p>{role}</p>
    
  <Counter />
    </div>
    )
  })


  
    return (
    <div>
      <div>
      {mappedTeam}
      </div>
     
    </div>

  )
}

export default TicketApp