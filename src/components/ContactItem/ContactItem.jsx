import React from 'react';
import { ListItem, Button } from './ContactItem.styles';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ListItem>
      <span>{contact.name}: {contact.number}</span>
      <Button type="button" onClick={handleDeleteContact}>Delete</Button>
    </ListItem>
  );
};

export default ContactItem;