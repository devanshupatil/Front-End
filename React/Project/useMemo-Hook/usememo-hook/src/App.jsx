import { useState } from 'react'

import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0)

  function expensiveTask(num) {

    console.log('Inside expensive Task');

    for (let i = 0; i <= 10000000000; i++) {
      return num * 2;
    }
  }

  let doubleValue = useMemo(() => expensiveTask(count), [count]);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>

        <div>
          <p>Double Value: {doubleValue}</p>
        </div>
      </div>
    )
  
}

export default App
