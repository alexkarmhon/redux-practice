import React from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactSearcher } from 'components/ContactSearcher/ContactSearcher';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const Phonebookpage = () => {
  return (
    <>
      <h1 className="pageTitle">Phonebook</h1>
      <section>
        <ContactForm />
      </section>
      <section>
        <ContactSearcher />
      </section>
      <section>
        <ContactsList />
      </section>
    </>
  );
};

export default Phonebookpage;
