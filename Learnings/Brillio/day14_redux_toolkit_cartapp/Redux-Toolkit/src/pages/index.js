import "../styles/app.scss";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import { routeConstants } from "../constants/routeConstants";
import Home from "./home";
import Cart from "./cart/";

function App() {
  return (
    <Provider store={store}>
      <Container className="w-100 h-100">
        <Router>
          <Routes>
            <Route path={routeConstants.HOME} element={<Home />} />
          </Routes>
          <Routes>
            <Route path={routeConstants.CART} element={<Cart />} />
          </Routes>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
