import { UserConsumer } from "../contexts/UserContext";

const UserProfile = () => {
  return (
    <UserConsumer>
      {({id,name}) => {
        return (
          <>
            <p> ID:{id}</p>
            <p>Name :{name}</p>
          </>
        );
      }}
    </UserConsumer>
  );
};
export default UserProfile;