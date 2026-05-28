import { motion } from 'framer-motion';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <motion.header
      className={styles.header}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.h2 className={styles.title} variants={fadeUp}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className={styles.subtitle} variants={fadeUp}>
          {subtitle}
        </motion.p>
      )}
    </motion.header>
  );
}
