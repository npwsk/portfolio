import { useTranslation } from 'react-i18next';
import ContactLink from './contact-link/ContactLink';
import './contact-list.scss';

const ContactList = () => {
  const { t } = useTranslation();
  const contacts = t('contacts', { returnObjects: true });

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
