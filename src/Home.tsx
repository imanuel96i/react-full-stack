import React from 'react'
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Card from "./components/Card"
import Footer from "./components/Footer"
import './components/css/index.sass'

function Home() {
  return (
    <>
      <Nav />
      <Carousel />
      <Card />
      <Footer/>
    </>
  );
}

export default Home;
