import React from 'react';
import css from 'components/Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilters } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilters(e.currentTarget.value));
  };

  return (
    <label className={css.LabelInput}>
      Find contacts by name
      <input className={css.InputFilter} type="text" onChange={changeFilter} />
    </label>
  );
};
