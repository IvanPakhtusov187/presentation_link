import { motion } from 'framer-motion';
import { projectItems, projectsPlaceholder } from '@/data';
import { SectionHeader } from '@/shared/ui/SectionHeader';
import { Button } from '@/shared/ui/Button';
import { AnimateOnScroll } from '@/shared/ui/AnimateOnScroll';
import styles from './Projects.module.scss';

function ProjectsPlaceholder() {
  const { title, message, footnote, statusLabel, gifUrl, gifAlt } =
    projectsPlaceholder;

  return (
    <AnimateOnScroll>
      <motion.article
        className={styles.placeholder}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.gifWrap}>
          <img
            src={gifUrl}
            alt={gifAlt}
            className={styles.gif}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.placeholderBody}>
          <p className={styles.status}>{statusLabel}</p>
          <h3 className={styles.placeholderTitle}>{title}</h3>
          <p className={styles.placeholderMessage}>{message}</p>
          <p className={styles.placeholderFootnote}>{footnote}</p>
        </div>
      </motion.article>
    </AnimateOnScroll>
  );
}

function ProjectsGrid() {
  return (
    <div className={styles.grid}>
      {projectItems.map((project, index) => (
        <AnimateOnScroll key={project.id} delay={index * 0.08}>
          <motion.article
            className={styles.card}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.stack} aria-label="Стек технологий">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <span className={styles.stackTag}>{tech}</span>
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Button
                href={project.githubUrl}
                variant="outline"
                size="sm"
                external
                ariaLabel={`GitHub репозиторий ${project.title}`}
              >
                GitHub
              </Button>
              <Button
                href={project.demoUrl}
                variant="secondary"
                size="sm"
                external
                ariaLabel={`Демо ${project.title}`}
              >
                Demo
              </Button>
            </div>
          </motion.article>
        </AnimateOnScroll>
      ))}
    </div>
  );
}

export function Projects() {
  const hasProjects = projectItems.length > 0;

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className={styles.container}>
        <SectionHeader
          id="projects-title"
          title="Pet projects"
          subtitle={
            hasProjects
              ? 'Проекты для демонстрации навыков'
              : 'Раздел в режиме честного backlog — репозитории появятся позже'
          }
        />
        {hasProjects ? <ProjectsGrid /> : <ProjectsPlaceholder />}
      </div>
    </section>
  );
}
