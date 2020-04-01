import { createAction } from '@reduxjs/toolkit';
import { Type } from "./types";
export const addContact = createAction(`${Type.ADD}`);
export const  delContact = createAction(`${Type.DELETE}`);
export const filterContact = createAction(`${Type.FILTER}`);




// export const addContact = state => ({
//   type: Type.ADD,
//   payload: state
// });
// export const delContact = id => ({
//   type: Type.DELETE,
//   payload: id
// });
// export const filterContact = value => ({
//   type: Type.FILTER,
//   payload: value
// });
