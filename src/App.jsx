import React from 'react'
import "./App.css";
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header/>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
