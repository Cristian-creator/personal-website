import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Knowledge from './components/knowledge/Knowledge';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import { Context } from './context';
import FooterSpace from './components/footer/FooterSpace';
import Companies from './components/Companies/Companies';

function App() {
  const { projects } = React.useContext(Context);

  useEffect(() => {
    // preload images
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.demo;
    });
  }, [projects]);

  return (
    <div className="App">
        <Header />
        <Experience />
        <Knowledge />
        <Companies />
        <Projects />
        <Footer />
        <FooterSpace />
    </div>
  );
}

export default App;
