import React, {useEffect} from "react";
import InfoProjeto4 from "./infoProjeto4";
import Navbar4 from "./Navbar4";

const InfoProjetos4 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div>
        <Navbar4 />  
        <InfoProjeto4 />      
      </div>
    );
  };
  
  export default InfoProjetos4; 