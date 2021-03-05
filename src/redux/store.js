import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import contactsReducer from "./contactsReducers";
import authReducer from "./auth/authReducers";

const store = configureStore({
  reducer: { contacts: contactsReducer, user: authReducer },
  middleware: [thunk],
});

export default store;
