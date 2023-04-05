import React from 'react'
import './Counter.scss'
import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)
   

    const handleClickIncrease = () => {
        setCount(count + 1)
      }
    
      const handleClickDecrease = () => {
        setCount(count - 1)
      }

  return (
    <div className='Counter'>
    <p>{count}</p>
    <button onClick={handleClickIncrease}>+</button>
    <button onClick={handleClickDecrease}>-</button>
  </div>
    
  )
}

export default Counter