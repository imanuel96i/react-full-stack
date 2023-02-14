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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
