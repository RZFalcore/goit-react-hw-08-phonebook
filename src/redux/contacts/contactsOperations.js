import axios from "axios";
import contactsActions from "./contactsActions";
import { authOperations } from "../auth/";

// axios.defaults.baseURL = "http://localhost:3001";

const fetchContactsOperation = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  authOperations.token.set(persistedToken);
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then((res) => dispatch(contactsActions.fetchContactsSuccess(res.data)))
    .catch((err) => dispatch(contactsActions.addContactError(err)));
};

const addContactOperation = (contact) => (dispatch) => {
  contactsActions.addContactRequest();
  axios
    .post("/contacts", contact)
    .then((res) => dispatch(contactsActions.addContactSuccess(res.data)))
    .catch((err) => dispatch(contactsActions.addContactError(err)));
};

const removeContactOperation = (id) => (dispatch) => {
  contactsActions.removeContactRequest();
  axios
    .delete(`/contacts/${id}`)
    .then((res) => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((err) => dispatch(contactsActions.removeContactError(err)));
};

export default {
  fetchContactsOperation,
  addContactOperation,
  removeContactOperation,
};
