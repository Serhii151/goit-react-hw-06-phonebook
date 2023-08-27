import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from './store/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styles';



const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  

  const filteredContacts = contacts.filter(contact =>
    contact.name && filter && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleFormSubmit = formData => {
    const newContact = { ...formData, id: uuidv4() };
    dispatch(addContact(newContact)); 
  };

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleFormSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </AppContainer>
  );
};

export default App;