import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:  
      <div>
        <Home/>
        <Navbar/>
      </div>
    },
    {
      path: '/about',
      element: 
      <div>
        <About/>
        <Navbar/>
      </div>,
      children:  // nested route parameter
      [
        {
          path: 'courses',
          element: <Courses/>
        },
        {
          path: 'mock-tests',
          element: <MockTest/>
        }
      ] // Fixed the missing comma
      
    },
    {
      path: '/student/:id', // route parameter is id
      element:
      <div>
        <ParamComp/>
        <Navbar/>
      </div>
      
    },
    {
      path: '*', // catch all other routes
      element: <h2>Page not found</h2>  // default route if no match found
    }
  ]
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
     
    </>
  )
}

export default App
