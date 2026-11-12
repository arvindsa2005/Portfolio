import './index.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProtectionLab from './components/ProtectionLab';
import Journey from './components/Journey';
import About from './components/About';
import Software from './components/Software';
import GitHubStrip from './components/GitHubStrip';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Skills />
        <Projects />
        <ProtectionLab />
        <Journey />
        <About />
        <Software />
        <GitHubStrip />
        <Contact />
      </main>
    </>
  );
}
