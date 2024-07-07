import React from 'react';

import { TodoCreateForm } from 'components/TodoCreateForm/TodoCreateForm';
import { TodoList } from 'components/TodoList/TodoList';
import { TodosAppBar } from 'components/TodosAppBar/TodosAppBar';

export const Todospage = () => {
  return (
    <>
      <h1 className="pageTitle">Tasks</h1>
      <TodosAppBar />
      <TodoCreateForm />
      <TodoList />
    </>
  );
};

export default Todospage;
