import { Navbar } from './components/navigation/Navbar';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { SceneIndicator } from './components/navigation/SceneIndicator';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Stack } from './sections/Stack';
import { Work } from './sections/Work';
import { Journey } from './sections/Journey';
import { Contact } from './sections/Contact';
import { Footer } from './components/navigation/Footer';

function App() {
  return (
    <div className="bg-paper min-h-screen text-ink relative">
      <LoadingScreen />
      <Navbar />
      <SceneIndicator />
      
      <main>
        <Hero id="intro" />
        <About id="about" />
        <Stack id="stack" />
        <Work id="work" />
        <Journey id="journey" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
