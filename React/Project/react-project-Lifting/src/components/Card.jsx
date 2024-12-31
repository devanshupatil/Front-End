import React from 'react'

const Card = (props) => {
  return (
    <div>
      <p>I am inside Child Component and value of name is: {props.name}</p>
      <input type="text" value={props.name} onChange={(e) => props.setName(e.target.value)}/>
    </div>
  )
}

export default Card
