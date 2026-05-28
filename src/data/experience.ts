import type { ExperienceItem } from './types';

export const experienceItems: ExperienceItem[] = [
  {
    id: 'sber',
    company: 'Сбер',
    role: 'Frontend Developer',
    period: '2023 — наст. время',
    description:
      'Разработка корпоративного SPA-приложения для сопровождения операций по аккредитивам физических лиц.',
    highlights: [
      'Разработка highload-реестра аккредитивов на React + RTK Query',
      'Server-side фильтрация, URL-state synchronization, динамические колонки',
      'Сложные бизнес-формы на React Hook Form',
      'API-layer на RTK Query',
      'Работа с вложениями через FormData',
      'Микрофронтенды через Module Federation',
      'Миграция legacy-системы на новый UI',
      'Production-сборки через Jenkins и Docker',
      'UI-kit на базе Ant Design',
    ],
  },
  {
    id: 'solid',
    company: 'Солид Банк',
    role: 'Frontend Developer',
    period: '2021 — 2023',
    description:
      'Система рабочего места кредитного инспектора для анализа и сопровождения кредитных сделок.',
    highlights: [
      'Dashboard и отчётность на React + Recharts',
      'Кредитные договоры и динамические формы',
      'CI/CD, unit-тесты, ESLint, TypeScript checks',
      'Sentry для мониторинга ошибок',
      'UI-kit, Storybook, Jest, React Testing Library',
      'Highload-таблицы на react-table',
    ],
  },
  {
    id: 'beltel',
    company: 'Beltel IT',
    role: 'Frontend Developer',
    period: '2020 — 2021',
    description:
      'B2B-платформа для автоматизации строительства и эксплуатации зданий.',
    highlights: [
      'Перевод legacy-кода на TypeScript',
      'Миграция Redux на Redux Toolkit',
      'Раздел логов на react-virtualized',
      'Оптимизация Webpack-сборки',
      'Lazy loading через React.lazy',
    ],
  },
];
