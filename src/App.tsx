import React from "react";
import "./App.css";
import { LandingPage } from "./component/landingPage";
import { Provider } from "react-redux";
import { store } from "./common/redux/store";
import Header from "./component/header/header";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App-header">
        <Header />
      </div>
      <div className="Content">
        <LandingPage />
      </div>
    </Provider>
  );
};

export default App;
