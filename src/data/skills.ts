import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      'React 18',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'SCSS',
    ],
  },
  {
    id: 'state-api',
    title: 'State & API',
    items: [
      'Redux Toolkit',
      'RTK Query',
      'TanStack Query',
      'Axios',
      'REST API',
    ],
  },
  {
    id: 'forms-ui',
    title: 'Forms & UI',
    items: [
      'React Hook Form',
      'Yup',
      'Zod',
      'Ant Design',
      'Material UI',
      'Storybook',
      'UI-kit',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    items: [
      'SPA',
      'Microfrontends',
      'Module Federation',
      'Feature-Sliced Design',
      'Frontend Architecture',
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Quality',
    items: ['Jest', 'React Testing Library', 'ESLint', 'Prettier', 'StyleLint'],
  },
  {
    id: 'build-devops',
    title: 'Build & DevOps',
    items: [
      'Vite',
      'Webpack',
      'Docker',
      'Jenkins',
      'GitLab CI/CD',
      'Git',
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    items: ['Cursor', 'ChatGPT', 'Claude', 'GitHub Copilot'],
  },
];
