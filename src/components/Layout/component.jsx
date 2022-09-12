import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
