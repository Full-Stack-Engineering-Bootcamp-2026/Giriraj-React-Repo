import React,{useState} from "react";
function LikeButton(){
    const[likes,setLikes]=useState(0);
    const handleLike=()=>{
        setLikes((prev)=>prev+1);//
    };
    const handleDislike=()=>{
        setLikes((prev)=>(prev>0?prev-1:0));
    };
    const handleReset=()=>{
        setLikes(0);
    };
    const buttonStyle={
        backgroundColor:likes>10?
        "green":"blue",
        color:"white",
        padding:"10px",
        margin:"5px",
        border:"none",
        cursor:"pointer"
    };
    return (
    <div style={{textAlign:"center",marginTop:"20px"}}>
        <button style={buttonStyle} onClick={handleLike}>
            Like
        </button>
        <button style={{margin:"5px"}} onClick={handleDislike}>
            Dislike
        </button>
        <button style={{margin:"5px"}} onClick={handleReset}>
            Reset
        </button>
    <h2>
        {likes}{likes===1?"Like":"Likes"}
    </h2>
    </div>
    );
    }
export default LikeButton;