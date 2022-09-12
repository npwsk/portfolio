import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Wrapper from '@/components/Wrapper';
import Overlay from '@/components/Overlay';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import MobileMenu from '@/components/MobileMenu';
import BurgerButton from '@/components/BurgerButton';
import { navItems } from '@/constants';
import classes from './styles.module.scss';

const Header = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'menu' });
  const navItemsTranslated = navItems.map((item) => ({ ...item, text: t(item.key) }));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((isOpen) => !isOpen);

  return (
    <header className={classes.header}>
      <Wrapper>
        <div className={classes.content}>
          <Logo />
          <div className={classes.menu}>
            <Menu items={navItemsTranslated} />
          </div>

          <Overlay isVisible={isMobileMenuOpen} onClick={toggleMobileMenu} />

          <div className={classNames(classes.mobileMenu, { [classes.isOpen]: isMobileMenuOpen })}>
            <MobileMenu items={navItemsTranslated} closeMenu={toggleMobileMenu} />
          </div>

          <div className={classes.burger}>
            <BurgerButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
