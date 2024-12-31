import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import ChildA from './components/ChildA';


const userContext = createContext();

// step 1. create context
// step 2. wrap all the child inside a provider
  {/* <userContext.Provider>
  <ChlidA/>
  </userContext.Provider> */}
// step 3. pass value
// step 4. consumer ke andar jaake consume karlo  

function App() {

const [user, setUser] = useState({name: 'John', age: 25});

  return (
    <>
        <userContext.Provider value={user}>
          <ChildA/>
        </userContext.Provider>
    </>
  )
}

export default App
export{userContext}