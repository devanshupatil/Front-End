import { useState } from 'react'

import './App.css'
import LogoutBtn from './Components/LogoutBtn'
import LognBtn from './Components/LoginBtn'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // 1. If-Else
  // if(isLoggedIn){

  //   return(<LogoutBtn/>)
  // }
  // else{
  //   return(<LognBtn/>)
  // }

  // 2. Ternary Operator
  return(isLoggedIn ? <LogoutBtn/> : <LognBtn/>)

  // 3. Logical Operator
  // return(isLoggedIn && <LogoutBtn/>) || <LognBtn/>
}

export default App
