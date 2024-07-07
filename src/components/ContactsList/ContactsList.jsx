import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactCard } from 'components/ContactCard/ContactCard';
import { Loader } from 'components/Loader/Loader';
import { deleteContactThunk, getContactsThunk } from 'reduxx/phonebook/thunk';
import { selectContacts, selectFilter } from 'reduxx/selectors';

import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const { items: contacts, isLoading, error } = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const visibleContacts = [...contacts]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase()),
    );

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch, contacts.length]);

  return (
    <>
      <h2 className="subTitle">Contacts: </h2>
      {isLoading && <Loader />}
      {contacts && (
        <ul className={css.contactsList}>
          {visibleContacts.map(contact => (
            <ContactCard
              contact={contact}
              key={contact.id}
              deleteContact={() => dispatch(deleteContactThunk(contact.id))}
            />
          ))}
        </ul>
      )}
      {error && <p>error</p>}
    </>
  );
};
