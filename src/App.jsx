// import { useState } from 'react'
import React from "react";
import UserCard from "./UserCard";
import './App.css'

function App() {
  
  const users=[{name:"Giriraj",bio:"FullStack Developer",role:"Developer"},
    {name:"Sumit",bio:"FrontEnd Developer",role:"Developer"},
    {name:"Tanvi",bio:"FronEnd Developer",role:"Developer"}
  ];
  return (
    <>
    <div className>
    <h1>User Cards</h1>
    <UserCard name="Rahul " bio="Frontend Developer" role="Admin"/>
    <UserCard name="Snehal" bio="Backend Developer" role="Developer"/>
    <UserCard name="Naresh" bio="Data Engineer" role="Data Eng."/>
    {users.map((user,index)=>(
      <UserCard
      key={index}
      name={user.name}
      bio={user.bio}
      role={user.role}
      />
    ))}
     </div>
    </>
  );
}

export default App
