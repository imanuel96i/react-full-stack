// Autores: Manuel Vidal, Benjamín Álvarez, Ignacio Korenhof
// Fecha creación: 06/02/23
// Fecha modificación: 14/02/23

import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './Home';
import Error from './Error'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Products';
import './components/css/index.sass'

// Indice general de la aplicación con sus rutas
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh"
      }}>
        <Nav />
        <div style={{flexGrow: 1}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Products' element={<Products/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// Default 
reportWebVitals();
