import { motion } from 'framer-motion';
import { heroData } from '@/data';
import { Button } from '@/shared/ui/Button';
import { scrollToSection } from '@/shared/lib/scrollTo';
import { HeroBackground } from './HeroBackground';
import styles from './Hero.module.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Главный экран">
      <HeroBackground />
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <span className={styles.badgeDot} />
            Open to opportunities
          </motion.div>

          <motion.h1 className={styles.name} variants={itemVariants}>
            {heroData.name}
          </motion.h1>

          <motion.p className={styles.role} variants={itemVariants}>
            {heroData.role}
          </motion.p>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            {heroData.subtitle}
          </motion.p>

          <motion.p className={styles.description} variants={itemVariants}>
            {heroData.description}
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <Button
              href={heroData.resumeUrl}
              variant="primary"
              size="lg"
              ariaLabel="Скачать резюме"
              download=""
            >
              Скачать резюме
            </Button>
            <Button
              variant="secondary"
              size="lg"
              ariaLabel="Связаться со мной"
              onClick={() => scrollToSection('#contact')}
            >
              Связаться
            </Button>
            <Button
              variant="outline"
              size="lg"
              ariaLabel="Посмотреть проекты"
              onClick={() => scrollToSection('#projects')}
            >
              Посмотреть проекты
            </Button>
          </motion.div>

          <motion.div className={styles.techStack} variants={itemVariants}>
            {['React 18', 'TypeScript', 'RTK Query', 'Microfrontends'].map(
              (tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <span />
              <span />
              <span />
              <span className={styles.codeTitle}>developer.tsx</span>
            </div>
            <pre className={styles.codeBody}>
              <code>{`const developer = {
  name: "Иван Пахтусов",
  role: "Frontend Developer",
  experience: "4+ years",
  stack: [
    "React", "TypeScript",
    "RTK Query", "Microfrontends"
  ],
  focus: "Enterprise SPA"
};`}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
