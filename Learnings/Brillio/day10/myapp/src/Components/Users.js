const Users = ({ details ,direction}) => {
  console.log(direction);
  return (
    <div style ={{ display : 'flex', flexDirection : `${direction}` }}>
     {details.map((user,id) => {
        return (
          <div key ={id}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
      </div>
  );
};
export default Users;
