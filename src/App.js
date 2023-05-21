// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Education from './components/Education.js'
import Skills from './components/Skills.js'
import Contact from './components/contact.js'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
