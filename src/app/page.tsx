import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TechStack } from './components/TechStack';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        {/* Adicione outras seções conforme necessário */}
        {/* Próximas seções aqui */}
      </main>
      <Footer />
    </>
  );
}
