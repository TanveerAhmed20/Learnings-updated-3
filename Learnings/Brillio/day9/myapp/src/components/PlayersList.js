import Player from "./Players";
const playersList = [
  { id: 1, name: "tanveer" ,image:""},
  { id: 2, name: "bishwaraj" },
  { id: 3, name: "sandeep" },
];

const Players = () => {
  return (
    <div>
      {playersList.map((plr,idx) => (
        <Player key = {idx} player={plr} />
      ))}
    </div>
    

  );
};

export default Players;
