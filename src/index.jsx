import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Router from './Router';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
