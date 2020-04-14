import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Knowledge from './components/knowledge/Knowledge';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Experience />
        <Knowledge />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
