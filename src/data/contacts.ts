import type { ContactLink } from './types';

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'ivanpakhtusov@gmail.com',
    href: 'mailto:ivanpakhtusov@gmail.com',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@VanPakMan',
    href: 'https://t.me/VanPakMan',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/IvanPakhtusov187',
    href: 'https://github.com/IvanPakhtusov187',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ivanpakhtusov',
    href: 'https://linkedin.com',
    external: true,
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Тюмень / Remote',
    href: '#contact',
  },
];
