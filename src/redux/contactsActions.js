import { v4 as uuid } from "uuid";
import Type from "./contactsActionTypes";

export const addContact = (contact) => ({
  type: Type.ADD_CONTACT,
  payload: { ...contact, id: uuid() },
});

export const removeContact = (id) => ({
  type: Type.REMOVE_CONTACT,
  payload: { id },
});

export const filterContacts = (filterString) => ({
  type: Type.FILTER_CONTACTS,
  payload: filterString,
});
