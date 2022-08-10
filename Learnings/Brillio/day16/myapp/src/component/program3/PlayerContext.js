import {createContext,useContext,useReducer } from 'react'
const PlayerContext = createContext({
    players:{},
    dispatch :()=>{}
})

function reducer(state,action){
    switch(action.type){
        case "ADD_PLAYER":
            return {

                ...state,
                [action.payload.id] :{...action.payload}
            };
        default: 
        return state;
    }
}

const PlayerProvider = ({children})=>{
const [players,dispatch] = useReducer(reducer,{});
return (
    <PlayerContext.Provider value ={{players,dispatch}}>
        {children}
    </PlayerContext.Provider>
)

}

const usePlayers = ()=> useContext(PlayerContext);
export {PlayerProvider,usePlayers};