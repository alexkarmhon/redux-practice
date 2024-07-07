import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ modalClose, children }) => {
  const handleEscPress = e => {
    e.code === 'Escape' && modalClose();
  };
  const onBackDropClick = e => {
    e.target === e.currentTarget && modalClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => window.removeEventListener('keydown', handleEscPress);
  });

  return createPortal(
    <div className={css.backdrop} onClick={onBackDropClick}>
      Modal<div className={css.modalContent}>{children}</div>
    </div>,
    modalRoot,
  );
};
