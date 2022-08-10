import { useState } from "react";
import { Button } from "reactstrap";
const FunCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </div>
  );
};

export default FunCounter;
