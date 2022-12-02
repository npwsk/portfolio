import { ReactComponent as GithubIcon } from '@/assets/icons/outlined/github.svg';
import { ReactComponent as TelegramIcon } from '@/assets/icons/outlined/telegram.svg';
import { ReactComponent as MailIcon } from '@/assets/icons/outlined/mail.svg';
import keyboard from '@/assets/images/keyboard.webp';
import ticTacToe from '@/assets/images/tictactoe.webp';
import shelter from '@/assets/images/shelter.webp';
import portfolio from '@/assets/images/portfolio.webp';

export const navItems = [
  { id: 'home_navlink', route: '/', text: 'Home', key: 'home' },
  // { id: 'about_navlink', route: '/about', text: 'About me', key: 'about' },
  { id: 'projects_navlink', route: '/projects', text: 'Projects', key: 'projects' },
  // { id: 'experience_navlink', route: '/experience', text: 'Experience', key: 'experience' },
  // { id: 'education_navlink', route: '/education', text: 'Education', key: 'education' },
  // { id: 'contacts_navlink', route: '/contacts', text: 'Contacts', key: 'contacts' },
];

export const skills = [
  {
    id: 'html',
    name: 'HTML',
    color: 'orange',
    icon: null,
  },
  {
    id: 'css',
    name: 'CSS',
    color: 'deepskyblue',
    icon: null,
  },
  {
    id: 'sass',
    name: 'SASS/SCSS',
    color: 'deeppink',
    icon: null,
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    color: 'deepskyblue',
    icon: null,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    color: 'gold',
    icon: null,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    color: 'royalblue',
    icon: null,
  },
  {
    id: 'react',
    name: 'React',
    color: 'lightblue',
    icon: null,
  },
  {
    id: 'redux',
    name: 'Redux',
    color: 'lightblue',
    icon: null,
  },
];

export const contacts = [
  {
    id: 'email',
    title: 'Email',
    text: 'perfil.nika@gmail.com',
    url: 'mailto:perfil.nika@gmail.com',
    icon: MailIcon,
  },
  {
    id: 'telegram',
    title: 'Telegram',
    text: '@nika_perfilova',
    url: 'https://t.me/nika_perfilova',
    icon: TelegramIcon,
  },
  {
    id: 'github',
    title: 'Github',
    text: 'npwsk',
    url: 'https://github.com/npwsk',
    icon: GithubIcon,
  },
];

const projects = [
  // {
  //   id: 'inventory-accounting-system',
  //   stack: ['react', 'redux', 'Express.js', 'MySQL', 'bootstrap'],
  //   source: 'https://github.com/npwsk/inventory-accounting-system',
  //   deploy: 'https://inv-accounting.herokuapp.com/',
  //   year: 2022,
  //   preview: null,
  //   image: null,
  //   features: [],
  // },
  {
    id: 'virtualKeyboard',
    stack: ['javascript', 'html', 'sass'],
    source: 'https://github.com/npwsk/virtual-keyboard',
    deploy: 'https://npwsk.github.io/virtual-keyboard/',
    year: 2022,
    preview: keyboard,
    image: keyboard,
    features: ['languages'],
  },
  // {
  //   id: 'onlineStore',
  //   stack: ['typescript', 'html', 'sass'],
  //   source: 'https://github.com/npwsk/online-store',
  //   deploy: 'https://npwsk.github.io/virtual-keyboard/',
  //   year: 2022,
  //   preview: null,
  //   image: null,
  //   features: [],
  // },
  {
    id: 'ticTacToe',
    stack: ['javascript', 'html', 'css'],
    source: 'https://github.com/npwsk/tic-tac-toe',
    deploy: 'https://npwsk.github.io/tic-tac-toe/',
    year: 2022,
    preview: ticTacToe,
    image: ticTacToe,
    features: ['modes', 'scoreBoard'],
  },
  // {
  //   id: 'movieApp',
  //   stack: ['javascript', 'html', 'css'],
  //   source: 'https://github.com/npwsk/movie-app',
  //   deploy: 'https://npwsk-movie-app.netlify.app/',
  //   year: 2022,
  //   preview: null,
  //   image: null,
  //   features: ['search', 'pagination'],
  // },
  {
    id: 'shelter',
    stack: ['javascript', 'html', 'sass'],
    source: 'https://github.com/npwsk/shelter',
    deploy: 'https://npwsk.github.io/shelter/main/',
    year: 2022,
    preview: shelter,
    image: shelter,
    features: [],
  },
  {
    id: 'portfolio',
    stack: ['javascript', 'html', 'sass'],
    source: 'https://github.com/npwsk/portfolio-landing',
    deploy: 'https://npwsk.github.io/portfolio-landing/portfolio/',
    year: 2022,
    preview: portfolio,
    image: portfolio,
    features: [],
  },
];

export const config = {
  navItems,
  skills,
  projects,
  contacts,
};
