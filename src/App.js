import React from 'react';
import Navbar from "./components/Navbar"
import User from "./components/User"

function App() {
  return (
    <div className="container">
      <Navbar title="User App"/>
      <hr />
      <User />
    </div>
  );
}

export default App;
