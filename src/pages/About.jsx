import React from 'react';
import content from '@/content/about';

const About = () => (
  <>
    <h2>About</h2>
    <h3>Hi, I&apos;m {content.firstName}</h3>
    <p>{content.job}</p>
    <div>{content.intro}</div>
  </>
);

export default About;
