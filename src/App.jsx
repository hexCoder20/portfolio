import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Projects';
import Footer from './components/Footer';


import './App.css'

function App() {
  

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </div>
  )
}

export default App
