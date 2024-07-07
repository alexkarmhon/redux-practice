import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { NewPost } from './NewPost/NewPost';
import { Todoshka } from './Todoshka/Todoshka';

const Homepage = lazy(() => import('../pages/Homepage'));
const Newspage = lazy(() => import('../pages/Newspage'));
const Todospage = lazy(() => import('../pages/Todospage'));
const Productspage = lazy(() => import('../pages/Productspage'));
const Phonebookpage = lazy(() => import('../pages/Phonebookpage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="news" element={<Newspage />} />
        <Route path="news/:newId" element={<NewPost />} />
        <Route path="todos" element={<Todospage />} />
        <Route path="todos/:todoId" element={<Todoshka />} />
        <Route path="products" element={<Productspage />} />
        {/* <Route path="products/:productId" element={<Product />} /> */}
        <Route path="phonebook" element={<Phonebookpage />} />
      </Route>
    </Routes>
  );
};
