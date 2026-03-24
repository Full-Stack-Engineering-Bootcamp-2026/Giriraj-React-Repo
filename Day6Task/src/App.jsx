import { useState } from 'react'
import LogInToggle from './Components/LogInToggle.jsx'
import './App.css'

function App() {
  // const [isLoggedIn,setLog] = useState(false)
  // const updateLog=(newval)=>{
  //   setLog(newval);
  // }
  // const handleToggle=()=>{
  //   setLog(!isLoggedIn);
  // }

  
  return (
    <>
     <div >
     <LogInToggle/>
     </div>
    </>
  )
}

export default App
