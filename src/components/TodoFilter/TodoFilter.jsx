import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components/Button/Button';
import { statusFilters } from 'reduxx/constants';
import { setStatusFilter } from 'reduxx/todo/statusFilterSlice';

import css from './TodoFilter.module.css';
import { selectStatus } from 'reduxx/selectors';

export const TodoFilter = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  const handleStatusChange = status => dispatch(setStatusFilter(status));

  return (
    <div className={css.flterWrapper}>
      <Button
        selected={status === statusFilters.all}
        onClick={() => handleStatusChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={status === statusFilters.active}
        onClick={() => handleStatusChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={status === statusFilters.completed}
        onClick={() => handleStatusChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
