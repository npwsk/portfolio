import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import classes from './styles.module.scss';

const Layout = () => (
  <div className={classes.layout}>
    <Header />
    <main className={classes.content}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
