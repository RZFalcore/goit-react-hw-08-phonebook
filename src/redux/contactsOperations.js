import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseUrl = "http://localhost:3001";

export const fetchContactsOperation = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then((res) => dispatch(contactsActions.fetchContactsSuccess(res.data)))
    .catch((err) => dispatch(contactsActions.addContactError(err)));
};

export const addContactOperation = (contact) => (dispatch) => {
  contactsActions.addContactRequest();
  axios
    .post("/contacts", contact)
    .then((res) => dispatch(contactsActions.addContactSuccess(res.data)))
    .catch((err) => dispatch(contactsActions.addContactError(err)));
};

export const removeContactOperation = (id) => (dispatch) => {
  contactsActions.removeContactRequest();
  axios
    .delete(`/contacts/${id}`)
    .then((res) => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((err) => dispatch(contactsActions.removeContactError(err)));
};
