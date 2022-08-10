import { useState } from "react";
import { Button } from "reactstrap";

const useCount = () => {
  const [count, setCount] = useState(0);
  return [count, () => setCount(count + 1), () => setCount(count - 1)];
};
export default function App() {
  const [count, increment, decrement] = useCount();
  return (
    <div>
      <Button onClick={increment}>+</Button>
      <h1>Count :{count}</h1>
      <Button onClick={decrement}>-</Button>
    </div>
  );
}
