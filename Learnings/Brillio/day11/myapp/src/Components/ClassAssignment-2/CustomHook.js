// returns formstate and actions.
import {useState, useReducer , useMemo, useEffect} from 'react';
const playerdetails = {
  players: [],
  name: "",
};
const FormActions = {
    addplayer: "AddPlayer",
    editplayer: "EditPlayer",
    deleteplayer: "DeletePlayer",
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case FormActions.addplayer:
        return { players: [...state.players, state.name], name: "" };
      case FormActions.editplayer:
        return { players: state.players, name: action.payload };
      default:
        return state;
    }
  }
  const FormAction_functions = (dispatch)=>{
    const editPlayer = (event) => dispatch({ type: "EditPlayer", payload: event.target.value });
    const addPlayer = () => dispatch({ type: "AddPlayer", payload: playerdetails.name });
    return {editPlayer,addPlayer};
  }
  const usePlayers = () =>{
      const [Formstate, dispatch] = useReducer(reducer, playerdetails);
      const actions = useMemo(()=>FormAction_functions(dispatch),[]);;
      return [Formstate,actions]
  }
  export {usePlayers}