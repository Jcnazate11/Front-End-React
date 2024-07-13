import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Home from './components/Home';
import Galeria from './components/Galeria';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contacto" element={<Formulario />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
