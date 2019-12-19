import React from "react";
import "./App.css";
import { LandingPage } from "./landingPage";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Local Deal</p>
      </header>
      <LandingPage />
    </div>
  );
};

export default App;
