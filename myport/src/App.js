import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
