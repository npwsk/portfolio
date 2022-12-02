/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import Button from '@/components/ui/buttons/Button/component';
import classes from './styles.module.scss';

const MobileMenu = ({ items, closeMenu }) => {
  const { t } = useTranslation();

  return (
    <nav className={classes.mobileMenu} role="navigation">
      <ul className={classes.menuList}>
        {items.map((item) => (
          <li key={`${item.id}_li_mobile`}>
            <NavLink
              to={item.route}
              key={`${item.id}_mobile`}
              onClick={closeMenu}
              className={({ isActive }) => cn(classes.link, { [classes.isActive]: isActive })}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <Button
        className={classes.cvButton}
        type="download"
        href="./cv.pdf"
        download="nika-perfilova-cv"
        variant="filled"
      >
        {t('about.download')}
      </Button>
    </nav>
  );
};
export default MobileMenu;
