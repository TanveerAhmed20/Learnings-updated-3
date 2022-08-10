import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route} from "react-router-dom";
import Navigation from './routes/navigation/navigation.component'
import Authentication from "./routes/authentication/Authentication.component";
const Shop = () => <div> This is Shop Page </div>;

// index sets the element  = <Home/> as the base component if nothing is given in the url : i.e localhost :3000
const App = () => {
  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
