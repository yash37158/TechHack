import React from "react";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import WhatsappButton from "./components/Whatsapp/whatsapp.jsx";
import Team from "./components/Team/Team";
import About from "./components/About/About";
import Prize from "./components/Prize/Prize";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Home></Home>
      <About />
      <Prize />
      <WhatsappButton />
      <Team />
    </div>
  );
}

export default App;
