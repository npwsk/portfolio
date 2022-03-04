import ContactLink from './contact-link/ContactLink';
import './contact-list.scss';

const contacts = [
  { title: 'email', href: 'mailto:perfil.nika@gmail.com' },
  { title: 'telegram', href: 'https://t.me/nika_perfilova' },
  { title: 'github', href: 'https://github.com/npwsk' },
];

const ContactList = () => {
  return (
    <ul className="contact-list">
      {contacts.map(({ title, href }) => (
        <li className="contact-list__item" key={title}>
          <ContactLink title={title} href={href} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
