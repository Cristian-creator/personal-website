import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Knowledge from './components/knowledge/Knowledge';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import { Context } from './context';

function App() {
  const { projects } = React.useContext(Context);

  useEffect(() => {
    // preloade images
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.demo;
    })
  }, [projects.projects]);

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
