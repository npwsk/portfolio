import { NavLink, Outlet } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
