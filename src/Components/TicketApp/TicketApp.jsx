import React from 'react'
// import team from '../../data/team.json'



const TicketApp = (props) => {
  const { team } = props
  
  
  
    return (
    <div>{team[3].name } + " " +
      {team[3].role }

    </div>

  )
}

export default TicketApp