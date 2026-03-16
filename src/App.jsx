// import { useState } from 'react'

import './App.css'

function App() {
  const name="Giriraj Thanvi";
  const batch="CDAC 2025";
const currentdateandtime=new Date().toLocaleString();
  return (
    <>
    <div className="parentdiv">
     <h1 style={{color:"blue"}}>{name}</h1>
     <p>Batch:{batch}</p>
     <p>Current Date and Time:{currentdateandtime}</p>
     <h2 style={{textAlign:"center"}}>Hobbies</h2>
     <ul>
      <li>Reading</li>
      <li>Problem Solving</li>   
     </ul>
     </div>
    </>
  )
}

export default App
