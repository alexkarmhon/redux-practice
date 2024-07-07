import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'components/Button/Button';
import { createTodo } from 'reduxx/todo/todoSlice';

import css from './TodoCreateForm.module.css';

export const TodoCreateForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const text = form.elements.text.value;
    dispatch(createTodo(text));
    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <h3 className={css.title}>Create ToDo</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.field} type="text" name="text" />
        <Button type="submit">Add ToDo</Button>
      </form>
    </div>
  );
};
