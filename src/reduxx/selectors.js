import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTotal = state => state.counter.total;

export const selectStep = state => state.counter.step;

export const selectNews = state => state.news.news;

export const selectTodos = state => state.todo.todos.todos;

export const selectStatus = state => state.todo.statusFilter.status;

export const selectProducts = state => state.products;

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state=>state.contacts.filter

export const selectTodosCount = createSelector([selectTodos], (todos) => {
  return todos.reduce(
    (count, todo) => {
    if (todo.completed) {
      count.completed += 1;
    } else {
      count.active += 1;
    }
    return count;
    },
    { active: 0, completed: 0 })
})

export const selectVisibleTodos = createSelector([selectTodos, selectStatus], (todos, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return todos.filter(todo => !todo.completed);
    case statusFilters.completed:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
})

