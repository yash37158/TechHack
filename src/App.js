import React from "react";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Home></Home>
    </div>
  );
}

export default App;
