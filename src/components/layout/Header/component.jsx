import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Wrapper from '@/components/ui/Wrapper';
import Overlay from '@/components/ui/Overlay';
import Logo from '@/components/Logo';
import Menu from '@/components/Menu';
import MobileMenu from '@/components/MobileMenu';
import BurgerButton from '@/components/ui/buttons/BurgerButton';
import Button from '@/components/ui/buttons/Button/component';
import { config } from '@/content/config';
import classes from './styles.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const navItemsTranslated = config.navItems.map((item) => ({
    ...item,
    text: t(`menu.${item.key}`),
  }));

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

          <Button
            className={classes.cvButton}
            type="download"
            href="./cv.pdf"
            download="nika-perfilova-cv"
            variant="filled"
          >
            {t('about.download')}
          </Button>

          <Overlay
            className={classes.overlay}
            isVisible={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />

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
