import React from 'react';

import { TodoCounter } from 'components/TodoCounter/TodoCounter';
import { TodoFilter } from 'components/TodoFilter/TodoFilter';

import css from './TodosAppBar.module.css';

export const TodosAppBar = () => {
  return (
    <div className={css.todosAppBarWrapper}>
      <div className={css.section}>
        <h2 className={css.title}>ToDo counter</h2>
        <TodoCounter />
      </div>
      <div className={css.section}>
        <h2 className={css.title}>ToDo filter</h2>
        <TodoFilter />
      </div>
    </div>
  );
};
