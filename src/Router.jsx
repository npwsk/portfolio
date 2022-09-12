import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
// import Experience from '@/pages/Experience';
import Education from '@/pages/Education';
import Contacts from '@/pages/Contacts';
import NotFound from '@/pages/NotFound';
import Project from '@/components/Project';
import Layout from '@/components/Layout';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />}>
          <Route path=":projectId" element={<Project />} />
          <Route index element={<div>Select a project</div>} />
        </Route>
        {/* <Route path="experience" element={<Experience />} /> */}
        <Route path="education" element={<Education />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
