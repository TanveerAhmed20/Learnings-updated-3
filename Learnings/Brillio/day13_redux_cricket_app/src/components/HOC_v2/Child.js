import x from './UserHOC'
import React from 'react';

const Child = ({user,hello,howdy,update,del})=>{
    return (
        <div>
            <h1>
                Child :{hello} {user.name} {howdy}
            <button onClick={update}> UPDATE</button>
            <button onClick={del}>DELETE</button>
           </h1>
        </div>
    )
    }
    
    function a(users){ 
        return users.find((user)=>(user.name ="shami"));
    }
    
    function b(dispatch){
        return {
            update: ()=> dispatch("UPDATE"),
            del: ()=>dispatch("DELETE"),
        }
    }

    export default x(a,b)(Child);