import type { HeroData } from './types';

export const heroData: HeroData = {
  name: 'Иван Пахтусов',
  role: 'Frontend Developer',
  subtitle: 'React • TypeScript • RTK Query • Microfrontends',
  description:
    'Frontend-разработчик с 4+ годами коммерческого опыта. Разрабатываю enterprise SPA, сложные бизнес-интерфейсы, highload-реестры, формы, UI-kit и микрофронтенды.',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
};
