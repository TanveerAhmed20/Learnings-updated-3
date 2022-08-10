
const Players = ({ players }) => {
    return (
      <div style ={{textAlign: 'center'}}>
        {players && players.map((val, id) => {
          return <h4 key={id}>{val}</h4>
        })}
      </div>
    );
  };
  export default Players;
  
  // if players is truthy then do map on players 