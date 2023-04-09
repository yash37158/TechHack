import React from "react";
import "./App.css";
// import Home from "./components/Home/Home.jsx";
// import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import WhatsappButton from "./components/Whatsapp/whatsapp.jsx";
import Countdown from "./components/Countdown/Countdown";


function App() {
  return (
    <> 
    <div className="home">
      <Countdown />
      {/* <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Home></Home>
      <WhatsappButton /> */}
    </div>
    </>
  );
}

export default App;
