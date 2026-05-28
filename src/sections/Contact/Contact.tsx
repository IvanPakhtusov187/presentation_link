import { motion } from 'framer-motion';
import { contactLinks } from '@/data';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { Button } from '@/shared/ui/Button';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';
import styles from './Contact.module.scss';

const iconMap: Record<string, string> = {
  email: '✉',
  telegram: '✈',
  github: '⌘',
  linkedin: 'in',
  location: '◎',
};

export function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.container}>
        <SectionHeader
          id="contact-title"
          title="Контакты"
          subtitle="Открыт к предложениям о работе и интересным проектам"
        />
        <AnimateOnScroll>
          <div className={styles.content}>
            <ul className={styles.links}>
              {contactLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  className={styles.linkItem}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <a
                    href={link.href}
                    className={styles.link}
                    {...(link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <span className={styles.icon} aria-hidden="true">
                      {iconMap[link.id] ?? '•'}
                    </span>
                    <span className={styles.linkContent}>
                      <span className={styles.linkLabel}>{link.label}</span>
                      <span className={styles.linkValue}>{link.value}</span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className={styles.cta}>
              <Button
                href="mailto:ivanpakhtusov@gmail.com"
                variant="primary"
                size="lg"
                ariaLabel="Написать на email"
              >
                Написать мне
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
