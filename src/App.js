import React from "react";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import WhatsappButton from "./components/Whatsapp/whatsapp.jsx";
import Sponsors from "./components/Sponsors/Sponsors";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Home></Home>
      <WhatsappButton />
      <Sponsors />
    </div>
  );
}

export default App;
