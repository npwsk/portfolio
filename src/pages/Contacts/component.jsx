import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/Wrapper';
import { contacts } from '@/constants';

const Contacts = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' });

  const translatedContacts = contacts.map((contact) => ({
    ...contact,
    title: t(contact.key),
  }));

  return (
    <Wrapper>
      <ul>
        {translatedContacts.map((contact) => (
          <li key={`main_${contact.key}_li`}>
            {contact.title}:
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              key={`main_${contact.key}_a`}
            >
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Contacts;
