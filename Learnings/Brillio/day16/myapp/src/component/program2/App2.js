import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./contexts/UserContext";
const App2 = () => {
  const [user, setUser] = useState({ id: 1, name: "dhoni" });
  function handleButtonClick(evt) {
    setUser({
      id: 3,
      name: "virat",
    });
  }
  return (
        <UserProvider value={user}>
          <UserProfile/>
          <button onClick={handleButtonClick}>Get User</button>
       </UserProvider>
  );
};
export default App2;
