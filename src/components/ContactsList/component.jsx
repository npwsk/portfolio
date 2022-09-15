import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { contacts } from '@/constants';
import classes from './styles.module.scss';

const ContactsList = ({ iconsOnly = false, layout = 'column', size = 'm' }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' });

  const translatedContacts = contacts.map((contact) => ({
    ...contact,
    title: t(contact.key),
  }));

  return (
    <ul
      className={classNames(classes.list, classes.contactsGrid, {
        [classes.row]: layout === 'row',
        [classes.column]: layout === 'column',
      })}
    >
      {translatedContacts.map((contact) => (
        <li key={`main_${contact.key}_li`}>
          {/* {contact.title}: */}
          <a
            className={classNames(classes.contactLink, {
              [classes.contactLinkSmall]: size === 's',
              [classes.contactLinkMedium]: size === 'm',
              [classes.contactLinkLarge]: size === 'l',
            })}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            key={`main_${contact.key}_a`}
          >
            <div className={classes.iconContainer}>
              <contact.icon className={classes.icon} />
            </div>
            {iconsOnly ? null : contact.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  iconsOnly: PropTypes.bool,
  layout: PropTypes.oneOf(['row', 'column']),
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

export default ContactsList;
