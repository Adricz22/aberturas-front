import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Novedades from './pages/Novedades';
import Contacto from './pages/Contacto';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/productos" exact element={<Productos />} />
        <Route path="/servicios" exact element={<Servicios />} />
        <Route path="/novedades" exact element={<Novedades />} />
        <Route path="/contacto" exact element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
