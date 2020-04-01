// import { Type } from "./types";
import { createReducer } from '@reduxjs/toolkit';
import * as action from './actions'
const initialState = {
  contacts: [],
  filterr: []
};
export const mainReducer=createReducer(initialState,{
[action.addContact]:(state,{payload})=> {
  return  { ...state, contacts: [...state.contacts, payload] };
},
[action.delContact]:(state,{payload})=> {
  return {
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== payload),
    filterr: state.contacts.filter(contact => contact.id !== payload)
  };
},
[action.filterContact]:(state,{payload})=> {
  return {
    ...state,
    filterr: state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(payload)
    )
  };
}


})

// export const mainReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case Type.ADD:
//       return { ...state, contacts: [...state.contacts, payload] };

//     case Type.DELETE:
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//         filterr: state.contacts.filter(contact => contact.id !== payload)
//       };
//     case Type.FILTER:
//       return {
//         ...state,
//         filterr: state.contacts.filter(contact =>
//           contact.name.toLowerCase().includes(payload)
//         )
//       };

//     default:
//       return state;
//   }
// };
