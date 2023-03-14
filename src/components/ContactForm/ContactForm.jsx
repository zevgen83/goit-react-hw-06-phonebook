import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSelectors';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/contactSlice';
import css from 'components/ContactForm/ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isFindName = contacts.find(contact => contact.name === name);

    if (isFindName) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(5), name, number };
    dispatch(addContact(newContact));
    reset(e);
  };

  const reset = e => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.Form} onSubmit={handleSubmit}>
      <label className={css.Label}>
        Name:
        <input
          className={css.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.Label}>
        Nunber:
        <input
          className={css.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className={css.Btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
