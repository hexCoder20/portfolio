import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Projects';
import Footer from './components/Footer';


import './App.css';
import './components/Hero.css';


function App() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Store",
      desc: "A full shop built with React and FakeStore API.",
      tech: "React, CSS"
    }, {
      id: 2,
      title: "Task Manager",
      desc: "Productivity app to track daily tasks.",
      tech: "JavaScript, LocalStorage"
    }, {
      id: 3,
      title: "Travel Dashboard",
      desc: "Interactive map and booking interface.",
      tech: "React Router, API"
    }, {
      id: 4,
      title: "Crypto Tracker",
      desc: "Live prices of top cryptocurrencies.",
      tech: "API, Charts"
    }
  ]

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Project projects={projects}/>
      <Footer />
    </div>
  )
}

export default App
