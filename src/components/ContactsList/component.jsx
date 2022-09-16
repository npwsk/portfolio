import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { contacts } from '@/constants';
import classes from './styles.module.scss';

const ContactsList = ({ iconsOnly = false, layout = 'column', iconSize = 's' }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' });

  const translatedContacts = contacts.map((contact) => ({
    ...contact,
    title: t(contact.id),
  }));

  return (
    <ul
      className={classNames(classes.list, classes.contactsGrid, {
        [classes.row]: layout === 'row',
        [classes.column]: layout === 'column',
      })}
    >
      {translatedContacts.map((contact) => (
        <li key={`main_${contact.id}_li`}>
          <a
            className={classNames(classes.contactLink)}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            key={`main_${contact.id}_a`}
            title={contact.title}
          >
            <div
              className={classNames(classes.iconContainer, {
                [classes.iconContainerSmall]: iconSize === 's',
                [classes.iconContainerMedium]: iconSize === 'm',
                [classes.iconContainerLarge]: iconSize === 'l',
              })}
            >
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
  iconSize: PropTypes.oneOf(['s', 'm', 'l']),
};

export default ContactsList;
