import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import classes from './styles.module.scss';

function Layout() {
  return (
    <div className={classes.layout}>
      <div className={classes.wrapper}>
        <Header />
      </div>
      <main className={classNames(classes.content, classes.wrapper)}>
        <Outlet />
      </main>
      <div className={classes.wrapper}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
