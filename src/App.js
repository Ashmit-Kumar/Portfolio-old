import React from 'react';
import './App.css';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <main>
        <HeroSection />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
