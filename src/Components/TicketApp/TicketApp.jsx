import React from 'react'
// import team from '../../data/team.json'



const TicketApp = (props) => {
  const { team } = props
  
  const mappedTeam = team.map((member) => {
    return (
    <div>
    <p>{member.name}</p>
    <p>{member.role}</p>
    </div>
    )
  })
  
    return (
    <div>
      {mappedTeam}
    </div>

  )
}

export default TicketApp