import React from "react";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot"; 
import Contato from "./components/Contato"; 
import Footer from "./components/Footer";

const InfoApp = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <InfoProjeto1 />
      <Contato />
      <Footer />
    </div>
  );
};

export default InfoApp;
