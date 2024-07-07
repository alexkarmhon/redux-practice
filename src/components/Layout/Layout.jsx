import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Modal } from 'components/Modal/Modal';

export const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <Header showModal={toggleModal} />
      {isModalOpen && <Modal modalClose={toggleModal}>Modalochka</Modal>}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
