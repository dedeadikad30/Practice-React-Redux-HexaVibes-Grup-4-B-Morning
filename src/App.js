import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import UserComponent from "../src/redux/slices/userComponent";
import CounterComponent from "../src/redux/slices/CounterComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <UserComponent />
          <CounterComponent />
        </main>
      </div>
    </Provider>
  );
}

export default App;
