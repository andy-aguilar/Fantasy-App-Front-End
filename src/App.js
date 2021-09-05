import React from "react"
import './App.css';

import ESPNLogin from "./components/ESPNLogin";

function App() {

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   socket.emit("code", code)
  // }

  return (
    <div className="App">
      <ESPNLogin />
    </div>
  );
}

export default App;
