import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const removeContactRequest = createAction("contacts/removeContactRequest");
const removeContactSuccess = createAction("contacts/removeContactSuccess");
const removeContactError = createAction("contacts/removeContactError");

const filterContactAction = createAction("contacts/filter");

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filterContactAction,
};
