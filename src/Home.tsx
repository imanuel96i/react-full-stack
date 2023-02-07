import React from 'react'
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import './components/css/index.sass'
import Card from "./components/Card"

function Home() {
  return (
    <>
      <Nav />
      <Carousel />
      <Card/>
    </>
  );
}

export default Home;
