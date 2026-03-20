import React,{useState} from "react";
import axios from "axios";

const QuoteFetcher=()=>{
    const[post,setPost]=useState(null);
    const[users,setUsers]=useState([]);
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState("");
    const fetchPost=async()=>{
        setLoading(true);
        setError("");
        setPost(null);
        try{const baseURL=import.meta.env.VITE_API_BASE_URL;
            const randomId=Math.ceil(Math.random()*100);
            const response=await axios.get(`${baseURL}/posts/${randomId}`);
            setPost(response.data);
        }
        catch(err){
            setError("Failed to fetch post.Please try again");
        }
        finally{
            setLoading(false);
        }
    };
    const fetchUsers=async()=>{
        setLoading(true);
        setError("");
        setUsers([]);
        try{
            const response=await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data);

        }catch(err){
            setError("Failed to fetch users.");
        }
        finally{
            setLoading(false);
        }
    };
    return (
    <div style={{padding:"20px",fontFamil:"Arial"}}>
        <h2>Quote Fetcher</h2>
        <button onClick={fetchPost}>Fetch Quote</button>
        <button onClick={fetchUsers} style={{marginLeft:"10px"}}>Fetch Users</button>
         {loading && <p>Loading ...</p>}
         {error && <p style={{color:"red"}}>{error}</p>}
         {post && !loading && (<div style={{marginTop:"20px"}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>)}
            {users.length>0 && !loading && (
                <div style={{marginTop:"20px"}}>
                    <h3>Users:</h3>
                    <ul>
                        {users.map((user)=>(
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                    </div>
            )}
    </div>


    );

};


export default QuoteFetcher;