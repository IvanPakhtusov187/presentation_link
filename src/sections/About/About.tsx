import { aboutItems } from '@/data';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';
import styles from './About.module.scss';

export function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.container}>
        <SectionHeader
          id="about-title"
          title="Обо мне"
          subtitle="Кратко о моём опыте, подходе к разработке и инструментах"
        />
        <ul className={styles.grid}>
          {aboutItems.map((item, index) => (
            <AnimateOnScroll key={item.id} delay={index * 0.08}>
              <li className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className={styles.text}>{item.text}</p>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
