const projects = [
  {
    id: 0,
    name: 'Tic-tac-toe',
    description: 'Simple tic-tac-toe game made with vanilla JS',
    stack: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/npwsk/tic-tac-toe',
    deploy: 'https://npwsk.github.io/tic-tac-toe/tic-tac-toe/',
    year: 2022,
  },
  {
    id: 1,
    name: 'Movie app',
    description: 'A movie catalog that helps to search movies by titles',
    stack: ['JavaScript', 'HTML', 'CSS'],
    source: 'https://github.com/npwsk/movie-app',
    deploy: 'https://npwsk-movie-app.netlify.app/',
    year: 2022,
  },
  {
    id: 2,
    name: 'Virtual keyboard',
    description: 'A virtual copy of a physical keyboard',
    stack: ['JavaScript', 'HTML', 'SCSS'],
    source: 'https://github.com/npwsk/virtual-keyboard',
    deploy: 'https://npwsk.github.io/virtual-keyboard/',
    year: 2022,
  },
  {
    id: 3,
    name: 'Online store',
    description: 'A virtual copy of a physical keyboard',
    stack: ['TypeScript', 'HTML', 'SCSS'],
    source: 'https://github.com/npwsk/online-store',
    deploy: 'https://npwsk.github.io/virtual-keyboard/',
    year: 2022,
  },
];

export const getProjects = () => projects;

export const getProjectById = (id) => projects.find((project) => project.id === id);

export default projects;
