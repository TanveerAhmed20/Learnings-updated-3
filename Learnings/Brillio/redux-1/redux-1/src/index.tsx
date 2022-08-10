import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./styles/index.scss";
import configureStore from "./store";
import { Provider } from "react-redux";

// Store contains - PlayerReducer and PlayerActions
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    {/* Provides store details to all the children of the App Component. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

