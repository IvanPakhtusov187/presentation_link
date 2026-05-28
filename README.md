# Portfolio — Иван Пахтусов

Современный сайт-визитка Frontend Developer с тёмной fintech-темой, анимациями Framer Motion и feature-based архитектурой.

## Live

Сайт публикуется на **свой домен** (без `github.io` в адресе), например: `https://ivanpakhtusov.dev`

Репозиторий: [github.com/IvanPakhtusov187/presentation_link](https://github.com/IvanPakhtusov187/presentation_link)

### Кастомный домен (рекомендуется)

1. **Купи домен** — [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/), [Namecheap](https://www.namecheap.com/), [reg.ru](https://www.reg.ru/) (`.dev`, `.ru`, `.com` — на выбор).

2. **Создай файл домена** в проекте:
   ```bash
   cp public/CNAME.example public/CNAME
   ```
   Открой `public/CNAME` и впиши **только домен**, одной строкой, без `https://`:
   ```
   ivanpakhtusov.dev
   ```

3. **GitHub Pages** → [Settings → Pages](https://github.com/IvanPakhtusov187/presentation_link/settings/pages):
   - Source: **Deploy from a branch** → `gh-pages` → `/ (root)`
   - **Custom domain:** тот же домен из `CNAME` → **Save** → включи **Enforce HTTPS**

4. **DNS у регистратора** (замени `ivanpakhtusov.dev` на свой домен):

   | Тип | Имя | Значение |
   |-----|-----|----------|
   | `CNAME` | `www` | `ivanpakhtusov187.github.io` |
   | `A` | `@` | `185.199.108.153` |
   | `A` | `@` | `185.199.109.153` |
   | `A` | `@` | `185.199.110.153` |
   | `A` | `@` | `185.199.111.153` |

   Для корня без `www` используй только `A`-записи; для `www` — `CNAME` на `ivanpakhtusov187.github.io`.

5. **Закоммить и запушить** — после деплоя сайт откроется по твоему домену (DNS может обновляться до 24–48 ч, обычно быстрее).

### Первый запуск GitHub Pages (один раз)

1. [Settings → Pages](https://github.com/IvanPakhtusov187/presentation_link/settings/pages) → **Deploy from a branch** → `gh-pages` / `(root)`
2. Дождись зелёного workflow в [Actions](https://github.com/IvanPakhtusov187/presentation_link/actions)

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
