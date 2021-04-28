import * as types from '../types';

export const postAdded = payload => ({ type: types.addPost, ...payload });
export const postDeleted = payload => ({ type: types.removePost, ...payload });
export const postLiked = payload => ({ type: types.likePost, ...payload });
export const postUnliked = payload => ({ type: types.unlikePost, ...payload });