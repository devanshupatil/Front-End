import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      About page
      <Outlet/>
    </div>
  )
}

export default About
