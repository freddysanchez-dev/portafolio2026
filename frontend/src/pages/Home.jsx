import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../pages/About';  // ← Importar About
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />      {/* ← Agregar About aquí */}
      <Contact />
    </>
  );
};

export default Home;