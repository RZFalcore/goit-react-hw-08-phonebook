import { createAction } from "@reduxjs/toolkit";

export const addContactAction = createAction("contacts/add");
export const removeContactAction = createAction("contacts/remove");
export const filterContactAction = createAction("contacts/filter");
