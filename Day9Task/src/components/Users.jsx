import {Outlet,useSearchParams} from 'react-router-dom';
export const Users=()=>{
    const[searchParams,setSearchParams]=useSearchParams();
    const result=searchParams.get('filter')==='active';
    return(<>
       <div>
<h2>User 1</h2>
<h2>User 2</h2>
<h2>User 3</h2>
   <Outlet/>
<div>
 <button onClick={()=>{setSearchParams({filter:'active'})}}>Start</button>
 <button onClick={()=>{setSearchParams({})}}>Stop</button>
</div>{
    result?<h1>Showing Active Users</h1>:<h1>Showing all users</h1>
}
    
       </div>
           </>);
}