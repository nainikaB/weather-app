import React from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import Weather from "./Weather/Weather";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <main style={{ marginTop: "90px" }}></main> */}
      <Weather />
    </div>
  );
}

export default App;
