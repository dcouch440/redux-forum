import { v4 } from "uuid";

export const postAdded = payload => ({ type: 'ADD_POST', payload: { id: v4(), ...payload } });