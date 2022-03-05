import Topbar from './components/topbar/Topbar';
import Intro from './components/sections/intro/Intro';
import Projects from './components/sections/projects/Projects';
import Experience from './components/sections/experience/Experience';
import Education from './components/sections/education/Education';
import Contact from './components/sections/contact/Contact';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Topbar />
      <main className="sections">
        <Intro nextLink="#projects" />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
