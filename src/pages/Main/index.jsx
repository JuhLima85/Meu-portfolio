import React from "react";
import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import Sobre from "../../components/Sobre";
import Habilidades from "../../components/Habilidades";
import Projetos from "../../components/Projetos";
import Contato from "../../components/Contato";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home /> 
      <Sobre />  
      <Habilidades />
      <Projetos />
      <Contato />            
    </div>
  );
};

export default Main;
