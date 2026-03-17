import React from "react";
function UserCard({name,bio,role="Mmember"})
{
    return(
        <div style={styles.card}>
            <h2>{name}</h2>
            <p><strong>Bio:</strong>{bio}</p>
             <p><strong>Role:</strong>{role}</p>
        </div>
    ); 
}

const styles={
    card:{
        border:"1px solid #ccc",
        borderRadius:"10px",
        padding:"15px",
        margin:"10px",
        width:"250px",
        boxShadow:"2px 2px 10px rgba(0,0,0,0.1)"  
    }
};

export default UserCard;