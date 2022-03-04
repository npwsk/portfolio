import './nav-link.scss';

const NavLink = ({ content, href }) => {
  return (
    <a className="nav-link" href={href}>
      {content}
    </a>
  );
};

export default NavLink;
