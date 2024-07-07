import { statusFilters } from "../constants"

export const todosInitialState = {
  todos: [],
  filteredTodos: [],
}

export const statusFilterInitialState = {status: statusFilters.all}