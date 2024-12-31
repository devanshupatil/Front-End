import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

  // variation:1
  // useEffect(() => {
  //  alert('I well run one each render');
  // },)


  // variation:2
  //  useEffect(() => {
  //   alert('I well run only 1st render');
  // },[])

  // variation:3
  // useEffect(() => {
  //   alert('I well run every time when count is updated');
  // },[count])

  // variation:4
  // useEffect(() => {
  //   alert('I well run every time when count or total is updated');
  // },[count, total])


  // variation:5
  // useEffect(() => {
  //   alert('Count is updated');

  //   // At each update count will remove and new count will show in UI
  //   return () => { // clean up function 
  //     alert('Count will unmount from UI');
  //   }
  // },[count])

  



  function handleClick() {
    setCount(count + 1)
  }

  function handleClickTotal (){
    setTotal(total + 1)
  }
  return (
   <div>
    <button onClick={handleClick}>
      Update Count
    </button>
   
    <p>Your Count is:{count}</p>
   
    <br />

    <button onClick={handleClickTotal}>
      Update Total
    </button>
    <p>Your Totle is:{total}</p>
   </div>
  )
}

export default App
