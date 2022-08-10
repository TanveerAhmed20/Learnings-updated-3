import Child from "./Child";
import { UserProvider } from "./UserContext";

export default function App1() {
  return (
    <div className="App">
      <UserProvider>
        <Child />
      </UserProvider>
    </div>
  );
}
