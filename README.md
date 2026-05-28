# Portfolio — Иван Пахтусов

Современный сайт-визитка Frontend Developer с тёмной fintech-темой, анимациями Framer Motion и feature-based архитектурой.

## Стек

- **React 18** + **TypeScript**
- **Vite** — сборка и dev-сервер
- **SCSS Modules** — стилизация
- **Framer Motion** — анимации
- Feature-based структура (FSD-like)

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Production-сборка
npm run build

# Превью production-сборки
npm run preview
```

После `npm run dev` сайт будет доступен по адресу [http://localhost:5173](http://localhost:5173).

## Структура проекта

```
src/
├── app/              # Корневой компонент приложения
├── components/       # Переиспользуемые компоненты (layout)
│   └── layout/
├── sections/         # Секции страницы (Hero, About, Skills, ...)
├── data/             # Конфигурация и mock-данные
├── shared/           # UI-kit, утилиты
│   ├── ui/
│   └── lib/
└── styles/           # Глобальные стили, переменные, миксины
```

## Расширение контента

Все данные вынесены в `src/data/` и легко редактируются:

| Файл | Содержимое |
|------|------------|
| `hero.ts` | Имя, роль, описание, ссылка на резюме |
| `about.ts` | Блок «Обо мне» |
| `skills.ts` | Категории навыков |
| `experience.ts` | Опыт работы |
| `projects.ts` | Pet-проекты (GitHub/Demo ссылки) |
| `contacts.ts` | Контакты |
| `aiWorkflow.ts` | AI workflow |

### Добавить проект

Когда проект готов — добавьте объект в массив `projectItems` в `src/data/projects.ts`. Секция автоматически переключится с placeholder на сетку карточек:

```ts
// src/data/projects.ts
export const projectItems: ProjectItem[] = [
  {
    id: 'my-project',
    title: 'My Project',
    description: 'Описание проекта',
    stack: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/...',
    demoUrl: 'https://...',
  },
];
```

Текст и GIF placeholder настраиваются в `projectsPlaceholder` в том же файле.

### Добавить навык

```ts
// src/data/skills.ts
{
  id: 'new-category',
  title: 'Category Name',
  items: ['Skill 1', 'Skill 2'],
}
```

## Резюме

Положите PDF-файл резюме в `public/resume.pdf` — кнопка «Скачать резюме» на главном экране будет работать автоматически.

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер с HMR |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Локальный превью сборки |
| `npm run lint` | ESLint проверка |

## Лицензия

MIT
