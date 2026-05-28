import { motion } from 'framer-motion';
import { experienceItems } from '@/data';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';
import styles from './Experience.module.scss';

export function Experience() {
  return (
    <section
      id="experience"
      className={styles.experience}
      aria-labelledby="experience-title"
    >
      <div className={styles.container}>
        <SectionHeader
          id="experience-title"
          title="Опыт работы"
          subtitle="Коммерческий опыт в fintech и enterprise-проектах"
        />
        <div className={styles.timeline}>
          {experienceItems.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={index * 0.1}>
              <motion.article
                className={styles.item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.marker} aria-hidden="true">
                  <span className={styles.dot} />
                </div>
                <div className={styles.card}>
                  <header className={styles.header}>
                    <div>
                      <h3 className={styles.company}>{item.company}</h3>
                      <p className={styles.role}>{item.role}</p>
                    </div>
                    {item.period && (
                      <time className={styles.period}>{item.period}</time>
                    )}
                  </header>
                  <p className={styles.description}>{item.description}</p>
                  <ul className={styles.highlights}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
