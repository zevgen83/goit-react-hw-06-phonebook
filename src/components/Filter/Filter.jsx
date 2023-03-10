import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.LabelInput}>
      Find contacts by name
      <input
        className={css.InputFilter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func,
};
