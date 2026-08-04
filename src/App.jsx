import './styles/App.css';

import Hero from './components/home/Hero';
import AboutMe from './components/home/AboutMe';
import Skills from './components/home/Skills';
import Experience from './components/home/Experience';
import Footer from './components/general/Footer';

function App() {
  return (
    <main>
      <Hero />

      <AboutMe />

      <Skills />

      <Experience />

      <Footer />
    </main>
  )
}

export default App;
