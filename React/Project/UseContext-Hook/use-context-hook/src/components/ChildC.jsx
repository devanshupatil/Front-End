import React from 'react'
import { userContext } from '../App'

const ChildC = () => {
    const user  = React.useContext(userContext)

  return (
    <div>
        <p>My name is {user.name}</p> 
        <p>I am {user.age} years old</p>
     
    </div>
  )
}

export default ChildC
