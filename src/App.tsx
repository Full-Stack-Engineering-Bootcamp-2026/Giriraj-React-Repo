import { useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {fetchUserById} from "./userSlice";
import type {RootState,AppDispatch} from "./store";
import './App.css'

function App() {

  const dispatch=useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.entities);
  const loading = useSelector((state: RootState) => state.users.loading);
  const error=useSelector((state:RootState)=>state.users.error);
 // const pending=useSelector((state:RootState)=>state.users.pending);
 // const loading=useSelector((state:RootState)=>state.users.loading);
  useEffect(()=>{

    dispatch(fetchUserById(1))
    
  },[dispatch]);
  if(error)
    { return(<p>Error:{error}</p>)}
   if(loading==='pending')
      {
    return(<p>
          <span className="loader"></span>
        </p>)
      }
  return (
    <div>
     
      <h1>Users</h1>
      <p>Status:{loading}</p>
      {users.map((user)=>(
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>))}
    </div>    
  )
}

export default App;
