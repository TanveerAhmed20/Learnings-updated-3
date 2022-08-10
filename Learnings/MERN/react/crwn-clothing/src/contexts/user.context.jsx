import {createContext, useState} from 'react';

// create a context 
// context constist of two things 
// 1. createCOntext(defaultValue)
// 2.  provider  > this is the actual component
//provider receives the value , which is going to hold the actual context value

//  provider : kind of alias component that allows us to use the user context 
// every contaxt that gets build for us , there is a provider , 
// provider is the component that will wrap around any other component that needs access to the values inside



export const UserContext = createContext({
    currentUser:null,
    setCurrentUser : () => null
});


export const UserProvider = ({children})=>{
    // store current use 
    const [currentUser , setCurrentUser] = useState(null);
    // value is an object that passes two things 
    const value = {currentUser,setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}