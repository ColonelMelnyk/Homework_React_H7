import React from 'react';
import { ContactList } from './ContactsDataList';
import { ListFilter } from './ListFilter';
import { Form } from './Form.jsx';
import css from './Form.module.css';
export const App = () => {
  return (
    <div className="app">
        <h2 className= {css.app_title}>Phonebook</h2>
      <Form/>
      <h2 className={css.filter_title}>Contacts</h2>
      <ListFilter />
      <ContactList></ContactList>
    </div>
  );
};