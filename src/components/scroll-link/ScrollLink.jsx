import classNames from 'classnames';
import './scroll-link.scss';

const ScrollLink = ({ href, section }) => {
  const linkClass = classNames({
    'scroll-link': true,
    'section__scroll-link': section,
  });

  return (
    <a className={linkClass} href={href}>
      <span className="scroll-link__arrow"></span>
      Scroll
    </a>
  );
};

export default ScrollLink;
