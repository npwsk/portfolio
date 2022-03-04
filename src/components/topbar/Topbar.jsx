import Logo from '../logo/Logo';
import ContactList from '../contact-list/ContactList';
import './topbar.scss';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__logo">
          <Logo />
        </div>

        <ContactList />
      </div>
    </header>
  );
};

export default Topbar;
