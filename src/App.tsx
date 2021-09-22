import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Route component={HomePage} path="/" exact />
    </div>
  );
}

export default App;
