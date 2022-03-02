import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import './app.scss'

const App = () => {
  return (
    <div className="app">
      <Topbar />
      <main className="sections">
        <Intro />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
