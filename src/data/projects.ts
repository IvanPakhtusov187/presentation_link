import type { ProjectItem, ProjectsPlaceholder } from './types';

/** Добавляйте сюда готовые проекты — секция автоматически переключится с placeholder на сетку карточек */
export const projectItems: ProjectItem[] = [];

export const projectsPlaceholder: ProjectsPlaceholder = {
  title: 'Pet projects — status: «скоро»',
  message:
    'В голове уже есть мысли о pet-проектах. В GitHub — тишина и один abandoned README.',
  footnote:
    'Как только появится время — здесь будет что-то на React и TypeScript. Обещаю. Ну, почти.',
  statusLabel: 'TODO · priority: someday · estimate: ???',
  gifUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmppZ2VzMjBjOGJ5djB4bW8wcWpocmtucTU1ZHF0cTUxZWowNXdpNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NTur7XlVDUdqM/giphy.gif',
  gifAlt: 'Собака за столом в горящей комнате',
};
