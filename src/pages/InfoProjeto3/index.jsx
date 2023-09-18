import React, {useEffect} from "react";
import InfoProjeto3 from "./infoProjeto3";
import Navbarinfo from "../../components/Navbarinfo";

const InfoProjetos3 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div>
        <Navbarinfo />  
        <InfoProjeto3 />      
      </div>
    );
  };
  
  export default InfoProjetos3; 