import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactAction,
  removeContactAction,
  filterContactAction,
} from "./contactsActions";

const addContact = (state, { payload }) => [...state, payload];
const removeContact = (state, { payload }) =>
  state.filter((item) => item.id !== payload);
const filterContacts = (state, { payload }) => payload;

const items = createReducer([], {
  [addContactAction]: addContact,
  [removeContactAction]: removeContact,
});

const filter = createReducer("", {
  [filterContactAction]: filterContacts,
});

export default combineReducers({ items, filter });
