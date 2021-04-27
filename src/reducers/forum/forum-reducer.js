/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  switch(action.type)
  {
    case 'ADD_POST':
      return {...state, ...{[action.payload.id]:{...action.payload}}};
    default:
      return state;
  }
}