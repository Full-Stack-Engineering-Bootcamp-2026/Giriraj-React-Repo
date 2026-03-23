import React from "react";
function List(){
    const data=["red","blue","green","orange","yellow"];
    
    const mapdata=data.map((item,index)=>({
        key:index,
        value:item
    }));
       console.log(mapdata);
    
        return(
         <div>
         <h1>Color List</h1>    
         <ul>{data.map((item,index)=>(
         <li key={index}>{item}</li>        
            ))}
        </ul>
         </div>
        );


        
    
}

export default List;