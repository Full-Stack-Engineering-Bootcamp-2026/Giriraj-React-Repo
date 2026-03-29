import {useParams} from 'react-router-dom';
export const UserDetails=()=>{
    // const params=useParams();
    // const id=params.id;
    const {id}=useParams()
    return(<>
       <div>
<h1>Details of user {id}</h1>
       </div>
           </>);
}