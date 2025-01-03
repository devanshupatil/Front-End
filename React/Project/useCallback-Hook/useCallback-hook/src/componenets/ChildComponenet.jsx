import React from 'react'

const ChildComponenet = React.memo(
  
  (props) => {

    console.log('Child Component re-evendered again');

    return (
      <div>
        <button>{props.buttonName}</button>
      </div>
    )
  }
);

export default ChildComponenet

// React.memo ke ander wrap => component => component re-rendered tabhi hoga jab props chnage honga nah toh re-rander nhi hoga

// if you are sendeing the function, then react.memo wont be able to save you from re-rendering 