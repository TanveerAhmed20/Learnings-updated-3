import {usePlayers} from './CustomHook'
import Players from "./Players";
const PlayersList = () => {
    const { Formstate , actions } = usePlayers();
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
export default PlayersList;
