import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import contactsReducer from "./contacts/contactsReducers";
import authReducer from "./auth/authReducers";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: { contacts: contactsReducer, auth: persistedAuthReducer },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
