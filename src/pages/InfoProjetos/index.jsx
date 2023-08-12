import React, {useEffect} from "react";
import InfoProjeto1 from "../../components/InfoProjeto1";
import Navbarinfo from "../../components/Navbarinfo";
import TecUtilizadas from "../../components/TecUtilizadas";

const InfoProjetos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbarinfo />  
      <TecUtilizadas />    
      <InfoProjeto1 />      
    </div>
  );
};

export default InfoProjetos;
