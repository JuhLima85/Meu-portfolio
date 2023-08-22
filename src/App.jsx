import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Botao from "./components/Botao";
import InfoProjetos from "./pages/InfoProjetos";
import InfoProjeto2 from "./pages/InfoProjetos/InfoProjeto2";

const App = () => {
  return (
    <Router>      
      <Botao />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/info-projetos' element={<InfoProjetos />} />
        <Route path='/info-projeto2' element={<InfoProjeto2 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;