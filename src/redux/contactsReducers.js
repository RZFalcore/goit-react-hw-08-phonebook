import { combineReducers } from "redux";
import Type from "./contactsActionTypes";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_CONTACT:
      return [...state, payload];
    case Type.REMOVE_CONTACT:
      return state.filter((contact) => contact.id !== payload.id);
    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case Type.FILTER_CONTACTS:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({ items: itemsReducer, filter: filterReducer });
