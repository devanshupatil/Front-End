import React from 'react'
import './Counter.css'

const Counter = () => {
  // setCount is function and userState is hook
  const [count, setCount] = React.useState(0); 
  return (
    <div className='counter-container'>
        <p id='para'>You have cliked {count} times</p>
        <button id='btn' onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter
