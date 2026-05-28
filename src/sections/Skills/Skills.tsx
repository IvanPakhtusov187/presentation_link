import { motion } from 'framer-motion';
import { skillCategories } from '@/data';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';
import styles from './Skills.module.scss';

export function Skills() {
  return (
    <section id="skills" className={styles.skills} aria-labelledby="skills-title">
      <div className={styles.container}>
        <SectionHeader
          id="skills-title"
          title="Навыки"
          subtitle="Технологии и инструменты, с которыми работаю в production"
        />
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <AnimateOnScroll key={category.id} delay={index * 0.06}>
              <motion.article
                className={styles.card}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <ul className={styles.badges}>
                  {category.items.map((skill) => (
                    <li key={skill}>
                      <span className={styles.badge}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
