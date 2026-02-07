import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Monitoring from './components/Monitoring';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="brand">~/THAMEESH_K</div>
        <nav>
          <a href="#home">./Home</a>
          <a href="#journey">./Journey</a>
          <a href="#skills">./Skills</a>
          <a href="#projects">./Projects</a>
          <a href="#dashboard">./Dashboard</a>
          <a href="#contact">Contact_Me</a>
        </nav>
      </header>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Monitoring />
      <Education />
      <Contact />
      <footer>© 2026 Thameesh Kumar K S. All systems operational.</footer>
    </div>
  );
}
