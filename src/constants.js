import { ReactComponent as GithubIcon } from '@/assets/icons/github.svg';
import { ReactComponent as TelegramIcon } from '@/assets/icons/telegram.svg';

export const navItems = [
  { id: 'home_navlink', route: '/', text: 'Home', key: 'home' },
  // { id: 'about_navlink', route: '/about', text: 'About me', key: 'about' },
  // { id: 'projects_navlink', route: '/projects', text: 'Projects', key: 'projects' },
  // { id: 'experience_navlink', route: '/experience', text: 'Experience', key: 'experience' },
  // { id: 'education_navlink', route: '/education', text: 'Education', key: 'education' },
  { id: 'contacts_navlink', route: '/contacts', text: 'Contacts', key: 'contacts' },
];

export const contacts = [
  {
    id: 0,
    title: 'Email',
    text: 'perfil.nika@gmail.com',
    url: 'mailto:perfil.nika@gmail.com',
    icon: null,
    key: 'email',
  },
  {
    id: 1,
    title: 'Telegram',
    text: '@nika_perfilova',
    url: 'https://t.me/nika_perfilova',
    icon: TelegramIcon,
    key: 'telegram',
  },
  {
    id: 2,
    title: 'Github',
    text: 'npwsk',
    url: 'https://github.com/npwsk',
    icon: GithubIcon,
    key: 'github',
  },
];
