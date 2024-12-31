import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function SetCount() {

    setCount(count + 1)
  }

  function handleMouseOver() {

    alert('I am Para')
  }

  function handleInputChane(event) {

    console.log(event.target.value)
  }

  function handleSubmit(event) {

    event.preventDefault()
    console.log('Form submitted')
    alert('Form submitted')
  }
  return (
    <div>
      <p>
        You have clicked {count} times
      </p>

      <button onClick={SetCount}>
        Click me
      </button>

      <p onMouseOver={handleMouseOver}>
        I am Para
      </p>

      <form onSubmit={handleSubmit}>
        
        <input type="text" onChange={handleInputChane} />

        <button type='submit'>
          Submit
        </button>
      
      </form>

    </div>
  )
}

export default App
