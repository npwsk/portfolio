import Logo from 'components/logo/Logo';
import ContactList from '../contact-list/ContactList';
import Nav from '../nav/Nav';
import Wrapper from '../wrapper/Wrapper';
import './topbar.scss';

const Topbar = () => {
  return (
    <header className="topbar">
      <Wrapper>
        <div className="topbar__wrapper">
          <div className="topbar__logo">
            <Logo />
          </div>

          <Nav />

          <ContactList />
        </div>
      </Wrapper>
    </header>
  );
};

export default Topbar;
