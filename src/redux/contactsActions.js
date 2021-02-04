import Type from "./contactsActionTypes";

export const addContact = (contact) => ({
  type: Type.ADD_CONTACT,
  payload: { ...contact },
});

export const removeContact = (id) => ({
  type: Type.REMOVE_CONTACT,
  payload: { id },
});

export const filterContacts = (filterString) => ({
  type: Type.FILTER_CONTACTS,
  payload: filterString,
});
