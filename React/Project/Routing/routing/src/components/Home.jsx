import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigation = useNavigate();

    function handleClick() {

        navigation('/about');
    }
  return (
    <div>
      Home page
      <br />
      <button onClick={handleClick}>
        Go to About
      </button>
    </div>
  )
}

export default Home
