import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Background from './components/Background';
import Cursor from './components/Cursor';
import FloatingButtons from './components/FloatingButtons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CertsContact from './components/CertsContact';
import Footer from './components/Footer';

function Portfolio() {
  return (
    <>
      <Cursor />
      <FloatingButtons />
      <Background />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <CertsContact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Portfolio />
      </LanguageProvider>
    </ThemeProvider>
  );
}
