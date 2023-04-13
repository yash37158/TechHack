import React from "react";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import WhatsappButton from "./components/Whatsapp/whatsapp.jsx";
import Team from "./components/Team/Team";
import About from "./components/About/About";
import Prize from "./components/Prize/Prize";
import Themes from "./components/Themes/Themes";
import Footer from "./components/Footer/Footer";
import Faq from "./components/FAQ/Faq";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Prize />
      <Themes />
      <WhatsappButton />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
