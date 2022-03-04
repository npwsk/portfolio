import './contact-link.scss';

const ContactLink = ({ href = '#', title }) => {
  return (
    <a className="contact-link" href={href}>
      <span className={`contact-link__icon ${title}`}></span>
      <span className="visually-hidden">{title}</span>
    </a>
  );
};

export default ContactLink;
