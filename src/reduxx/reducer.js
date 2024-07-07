import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterSlice";
import { todosReducer } from "./todo/todoSlice";
import { statusFilterReducer } from "./todo/statusFilterSlice";
import { newsReducer } from "./news/newsSlice";
import { productsReducer } from "./products/slice";
import { contactsReducer } from "./phonebook/slice";

export const reducer = combineReducers({
  counter: counterReducer,
  todo: combineReducers({
    todos: todosReducer,
    statusFilter: statusFilterReducer,
  }),
  news: newsReducer,
  products: productsReducer,
  contacts: contactsReducer,
})