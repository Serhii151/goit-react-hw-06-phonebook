import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;