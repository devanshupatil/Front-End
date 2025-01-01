import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useEffect } from'react'


function App() {
  const [count, setCount] = useState(0)
  let val = useRef(0);
  let btnRef = useRef();

  function handleIncrementClick() {
    val.current = val.current + 1;
    console.log('value of val: '+val.current);
    setCount(count + 1)
  }

  function changeColor() {

   btnRef.current.style.background= 'red';
    
  }

  useEffect(() => {
    console.log('main ferse render hogya hu');
  }, );
  return (
   <div>
    <button 
      ref={btnRef}
    onClick={handleIncrementClick}>
      Increment
    </button>

    <p>
      <button onClick={changeColor}>
        Chnage color of 1st Button
      </button>
    </p>

    <div>
     <p>Count: {count}</p>
    </div>
   </div>
  )
}

export default App
