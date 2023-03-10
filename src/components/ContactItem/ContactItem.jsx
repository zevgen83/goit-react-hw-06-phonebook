import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactItem/ContactItem.module.css';

export const ContactItem = ({ id, name, number, removeContact }) => {
  return (
    <li className={css.ContactItem}>
      {name}: {number}
      <button
        className={css.BtnDelete}
        type="button"
        onClick={() => removeContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func,
};
