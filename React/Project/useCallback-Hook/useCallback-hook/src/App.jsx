import { useCallback, useState } from 'react'
import './App.css'
import ChildComponenet from './componenets/ChildComponenet'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback (()=>  {

    setCount(count + 1);
  },[count]);

  // this usecall back hook will not be created referenced of function again and again after every re-render call


  return (
    <div>

      <div>
        <p>
          You clicked {count} times
        </p>

        <p>
          <button onClick={handleClick}>
           Increment
          </button>
        </p>
      </div>

      <div>
        <ChildComponenet buttonName="Click me" />
      </div>
       
      

    </div>
  )
}

export default App
