import { useReducer } from "react";
import Players from "./Players";

const playerdetails = {
  players: [],
  name: "",
};

const actions = {
  addplayer: "AddPlayer",
  editplayer: "EditPlayer",
  deleteplayer: "DeletePlayer",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.addplayer:
      return { players: [...state.players, state.name], name: "" };
    case actions.editplayer:
      return { players: state.players, name: action.payload };
    default:
      return state;
  }
}
const usePlayers = () =>{
    const [state, dispatch] = useReducer(reducer, playerdetails);
    const editPlayer = (event) => dispatch({ type: "EditPlayer", payload: event.target.value });
    const addPlayer = () => dispatch({ type: "AddPlayer", payload: state.name });
    return {state,actions:{addPlayer,editPlayer}}

}
const Player = () => {
    const  [Formstate , actions ] = usePlayers();
  return (
    <div>
      <div className="container">
        <input type="text" onChange={actions.editPlayer} value={Formstate.name} placeholder ="enter player name"/>
        <button onClick={actions.addPlayer}>ADD</button>
      </div>
    <Players style  players={Formstate.players} />
    </div>
  );
};
export default Player;
