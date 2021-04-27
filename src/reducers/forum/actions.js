export const postAdded = payload => ({ type: 'ADD_POST', ...payload });
export const postDeleted = payload => ({ type: 'REMOVE_POST', ...payload });