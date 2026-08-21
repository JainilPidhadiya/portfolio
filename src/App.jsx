import { Navbar } from './components/navigation/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Systems } from './sections/Systems';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Toolkit } from './sections/Toolkit';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero id="home" />
        <About id="about" />
        <Systems id="systems" />
        <Projects id="projects" />
        <Experience id="experience" />
        <Toolkit id="skills" />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  );
}

export default App;
