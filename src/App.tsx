import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';

function App() {
  return (
    <div style={{ height: '100%' }} className="App">
      <Route component={HomePage} path="/" exact />
    </div>
  );
}

export default App;
