import React, {useEffect} from "react";
import InfoProjeto2 from "./InfoProjeto2";
import Navbarinfo from "../../components/Navbarinfo";

const InfoProjetos2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbarinfo />  
      <InfoProjeto2 />      
    </div>
  );
};

export default InfoProjetos2; 
