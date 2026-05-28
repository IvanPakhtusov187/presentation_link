import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  AiWorkflow,
  Contact,
} from '@/sections';
import styles from './App.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AiWorkflow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
