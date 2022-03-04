import { useTranslation } from 'react-i18next';
import './nav.scss';
import NavLink from './nav-link/NavLink';

const Nav = () => {
  const { t } = useTranslation();
  const sections = t('nav.sections', { returnObjects: true });

  return (
    <nav className="nav">
      <ul className="nav__list">
        {sections.map(({ title, href }) => (
          <li className="nav__item" key={title}>
            <NavLink href={href} content={title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
