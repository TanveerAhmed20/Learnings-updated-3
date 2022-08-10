const Players = ({player}) => {
    const {id,name} = player;
  return (
    <h1>
      Player No: {id} Player Name : {name}
    </h1>
  );
};
export default Players;
