import React from "react";
import { useUser } from "./UserContext";

const Child = () => {
  const user = useUser();

  if (!user) return <div>Loading ... </div>;
  return (
    <div>
      {user.name} - {user.type}
    </div>
  );
};

export default Child;
