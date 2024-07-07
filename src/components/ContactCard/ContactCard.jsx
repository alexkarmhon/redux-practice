import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { Button } from 'components/Button/Button';

import css from './ContactCard.module.css';

export const ContactCard = ({ contact, deleteContact }) => {
  const { name, number } = contact;
  return (
    <li className={css.contactCard} >
      <h5 className={css.contactName}>{name}</h5>
      <p className={css.contactPhone}>{number}</p>
      <Button className={css.contactBtn} onClick={deleteContact}>
        <RiDeleteBin6Line className={css.deleteIcon} />
      </Button>
    </li>
  );
};
