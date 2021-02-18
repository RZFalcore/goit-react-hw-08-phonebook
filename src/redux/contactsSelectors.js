import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = createSelector(
  [getContacts, (state, contactId) => contactId],
  (contacts, contactId) => {
    return contacts.find((contact) => contact.id === contactId);
  }
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getFilteredContacts,
  getContactById,
};
export default contactsSelectors;
