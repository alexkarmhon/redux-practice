import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilter } from 'reduxx/phonebook/slice';

import css from './ContactSearcher.module.css';

export const ContactSearcher = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="subTitle">ContactSearcher: </h2>
      <label className={css.label}>
        <input
          type="text"
          className={css.nameFilter}
          placeholder="Start entering the search name here..."
          onChange={e => {
            dispatch(changeFilter(e.target.value.trim()))
            console.log(e.target.value)
          }}
        />
      </label>
    </>
  );
};
