import initial from './initial';
import * as types from '../types';

const forumReducer = (state = initial, action) => {
  const { id, type, ...payload } = action;
  const switchObject =
  {

    [types.addPost]: () => ({ ...state, ...{
      [id] : {...payload, id} }
    }),

    [types.removePost]: () => {
      const prev = {...state};
      delete prev[id];
      return prev;
    },

    [types.likePost]: () => ({...state, ...{
      [id]: {
        ...state[id],
        ...{likes: state[id].likes += 1}
      }
    }}),

    [types.unlikePost]: () => ({...state, ...{
      [id]: {
        ...state[id],
        ...{likes: state[id].likes && --state[id].likes}
      }
    }}),

    DEFAULT: () => state
  };

  return (switchObject[type] || switchObject['DEFAULT'])();
}

export default forumReducer;