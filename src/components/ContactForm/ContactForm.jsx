import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';
import { addContactThunk } from 'reduxx/phonebook/thunk';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContactThunk({
      id: nanoid(),
      name,
      number,
    }));
    resetForm();
  };
  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.formInput}
          type="text"
          name="number"
          placeholder="000-000-000"
          required
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button className={css.contactFormBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
