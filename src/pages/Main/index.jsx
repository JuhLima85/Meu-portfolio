import React from "react";
import Navbar from "../../components/Navbar";
import Home from "./Home";
import Sobre from "./Sobre";
import Habilidades from "./Habilidades";
import Projetos from "./Projetos";
import Contato from "./Contato";

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
