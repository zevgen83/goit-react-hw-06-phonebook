import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const currentContacts = contacts;
    window.localStorage.setItem('contacts', JSON.stringify(currentContacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const isFindName = contacts.find(contact => contact.name === name);

    if (isFindName) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(
      contacts =>
        (contacts = [
          ...contacts,
          { id: nanoid(5), name: name, number: number },
        ])
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const removeContact = contactID => {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  };

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={formSubmitHandler} />
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filtredContacts()}
          removeContact={removeContact}
        />
      </div>
    </div>
  );
}
