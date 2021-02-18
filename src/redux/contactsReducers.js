import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const fetchContacts = (state, { payload }) => payload;
const addContact = (state, { payload }) => [...state, payload];
const removeContact = (state, { payload }) =>
  state.filter((item) => item.id !== payload);
const filterContacts = (state, { payload }) => payload;

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: fetchContacts,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [contactsActions.filterContactAction]: filterContacts,
});

export default combineReducers({ items, filter });
