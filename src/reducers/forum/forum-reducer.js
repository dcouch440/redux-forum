/* eslint-disable import/no-anonymous-default-export */
import initial from './initial';

export default (state = initial, action) => {
  const { id, type, ...payload } = action;

  const switchObject =
  {
    ADD_POST: () => ({ ...state, ...{ [id] : {...payload, id} } }),
    REMOVE_POST: () => {
      const prev = {...state};
      delete prev[id];
      return prev;
    },
    DEFAULT: () => state
  };

  return (switchObject[type] || switchObject['DEFAULT'])()
}