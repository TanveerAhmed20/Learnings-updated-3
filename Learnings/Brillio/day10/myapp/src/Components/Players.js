const Players = ({ players }) => {
  return (
    <div>
      {players.map((val, id) => {
        return <h4 key={id}>{val}</h4>;
      })}
    </div>
  );
};
export default Players;
