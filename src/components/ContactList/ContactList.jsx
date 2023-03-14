import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactSelectors';
import { getfilter } from 'redux/filter/filterSelectors';
import { deleteContact } from 'redux/contacts/contactSlice';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getfilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.ContactList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.ContactItem}>
            {name}: {number}
            <button
              className={css.BtnDelete}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
