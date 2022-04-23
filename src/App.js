import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Competence from './pages/Competence';
import Portefolio from './pages/Portefolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/competences" element={<Competence />} />
           <Route path="/portefolio" element={<Portefolio />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFound />} />      
       </Routes>
    </BrowserRouter>
      </>
    </div>
  );
};

export default App;