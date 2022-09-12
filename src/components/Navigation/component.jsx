import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const navItems = [
  { id: 'home_navlink', route: '/', text: 'Home' },
  { id: 'about_navlink', route: '/about', text: 'About me' },
  { id: 'projects_navlink', route: '/projects', text: 'Projects' },
  { id: 'experience_navlink', route: '/experience', text: 'Experience' },
  { id: 'contacts_navlink', route: '/contacts', text: 'Contacts' },
];

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li className={styles.listItem} key={`${item.id}_li`}>
            <NavLink to={item.route} key={item.id}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
