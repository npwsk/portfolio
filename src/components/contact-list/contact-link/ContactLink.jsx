// import { useEffect, useState } from 'react';
import './contact-link.scss';

// const onMouseMove = () => {};

// const calculatePosition = () => {};

// const onHover = () => {};

// const onLeave = () => {};

const ContactLink = ({ href = '#', title }) => {
  // useEffect(() => {
  //   window.addEventListener('mousemove', onMouseMove);
  //   window.addEventListener('resize', calculatePosition);
  // });

  // const [isHover, setIsHover] = useState(initialState);

  return (
    <a className="contact-link" href={href}>
      <span className={`contact-link__icon ${title}`}></span>
      <span className="visually-hidden">{title}</span>
    </a>
  );
};

export default ContactLink;
