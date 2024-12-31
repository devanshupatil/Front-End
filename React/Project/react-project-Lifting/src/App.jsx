import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('');

  return (
   <div> 
    <Card name={name} setName={setName}/>
    <p>I am inside Parent Component and value of name is: {name}</p>
   </div>
  )
}

export default App
