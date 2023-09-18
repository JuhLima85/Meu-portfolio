import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Botao from "./components/Botao";
import InfoProjetos1 from "./pages/InfoProjeto1";
import InfoProjetos2 from "./pages/InfoProjeto2";
import InfoProjetos3 from "./pages/InfoProjeto3";

const App = () => {
  return (
    <Router>      
      <Botao />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/info-projetos' element={<InfoProjetos1 />} />
        <Route path='/info-projeto2' element={<InfoProjetos2 />} />
        <Route path='/info-projeto3' element={<InfoProjetos3 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;