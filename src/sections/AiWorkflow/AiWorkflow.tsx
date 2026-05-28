import { motion } from 'framer-motion';
import { aiWorkflowSteps, aiWorkflowDescription } from '@/data';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';
import styles from './AiWorkflow.module.scss';

export function AiWorkflow() {
  return (
    <section
      id="ai-workflow"
      className={styles.section}
      aria-labelledby="ai-workflow-title"
    >
      <div className={styles.container}>
        <SectionHeader
          id="ai-workflow-title"
          title="Как я использую AI в разработке"
          subtitle="AI как ускоритель, а не замена инженерного мышления"
        />
        <AnimateOnScroll>
          <div className={styles.content}>
            <div className={styles.pipeline} role="list" aria-label="AI workflow">
              {aiWorkflowSteps.map((step, index) => (
                <div key={step.id} className={styles.stepWrapper} role="listitem">
                  <motion.div
                    className={styles.step}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.stepNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.stepLabel}>{step.label}</span>
                  </motion.div>
                  {index < aiWorkflowSteps.length - 1 && (
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className={styles.description}>{aiWorkflowDescription}</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
