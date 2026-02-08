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
    tech: "React, CSS",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, 
    title: "Task Manager", 
    desc: "Productivity app to track daily tasks.",
    tech: "JavaScript, LocalStorage",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, 
    title: "Travel Dashboard", 
    desc: "Interactive map and booking interface.",
    tech: "React Router, API",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 4, 
    title: "Crypto Tracker", 
    desc: "Live prices of top cryptocurrencies.",
    tech: "API, Charts",
    image: "https://images.unsplash.com/photo-1621504450168-b8c437536968?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

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
