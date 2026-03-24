import react,{ useState } from 'react'
function LogInToggle()
{
   const [isLoggedIn,setLog] = useState(false)
     const updateLog=(newval)=>{
       setLog(newval);
     }
     const handleToggle=()=>{
       setLog(!isLoggedIn);
     }
   
     
     return (
       <>
        <div style={{textAlign:"center",marginTop:"50px"}}>
         <h1>{isLoggedIn?"Welcome ":"Please Login"}</h1>
       {isLoggedIn?(<button onClick={handleToggle}>Logout</button>):(<button onClick={handleToggle}>Login</button>)}
        </div>
       </>
     )
}
export default LogInToggle;