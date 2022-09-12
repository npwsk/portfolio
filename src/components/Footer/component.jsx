import React from 'react';
import Wrapper from '@/components/Wrapper/component';
import { ReactComponent as Icon } from '@/assets/icons/github.svg';
import classes from './styles.module.scss';

const Footer = () => (
  <footer>
    <Wrapper>
      <div className={classes.content}>
        <a href="https://github.com/npwsk" target="_blank" rel="noopener noreferrer">
          <Icon />
          {/* npwsk */}
        </a>
        2022
      </div>
    </Wrapper>
  </footer>
);

export default Footer;
