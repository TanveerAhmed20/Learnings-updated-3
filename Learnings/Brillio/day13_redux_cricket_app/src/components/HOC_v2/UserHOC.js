import users  from './users.json'
import React from 'react'
function dispatch(type){
    console.log("type",type);
    switch(type){
        case "DELETE":
            console.log('delet player');
            break;
        case "UPDATE":
            console.log('update player');
            break;
        default : 
        break;

    }
}
function x(a,b){
    const user = a(users);
    
    console.log("user is",user);

    const actions = b(dispatch);

    console.log(actions);

    return function y(Component){
        return function z(props){
            return <Component user={user} {...actions}{...props}/>
        }
    }
}

export default x;

