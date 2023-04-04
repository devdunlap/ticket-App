import React, {useState} from 'react'
// import team from '../../data/team.json'


const TicketApp = (props) => {
  
  const { team } = props
  
  const [count, setCount] = useState(0)

  const handleClickIncrease = () => {
    setCount(count + 1)
  }

  const handleClickDecrease = () => {
    setCount(count - 1)
  }
  

  const mappedTeam = team.map((member) => {
    const { name, role } = member
    return (
    <div>
    <h1>{name}</h1>
    <p>{role}</p>
    <p>{count}</p>
    <button onClick={handleClickIncrease}>+</button>
    <button onClick={handleClickDecrease}>-</button>
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