import React, {useEffect} from "react";
import InfoProjeto4 from "./infoProjeto4";
import Navbarinfo from "../../components/Navbarinfo";

const InfoProjetos4 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div>
        <Navbarinfo />  
        <InfoProjeto4 />      
      </div>
    );
  };
  
  export default InfoProjetos4; 