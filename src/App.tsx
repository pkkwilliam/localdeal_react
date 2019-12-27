import React from "react";
import "./App.css";
import { LandingPage } from "./component/landingPage";
import { Provider } from "react-redux";
import { store } from "./common/redux/store";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>Local Deal</p>
        </header>
        <LandingPage />
      </div>
    </Provider>
  );
};

export default App;
