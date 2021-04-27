import forumReducer from './forum-reducer';
import * as actions from './actions';

describe('forumReducer', () => {

  const init = {};

  const payload = {
    id: 1,
    title: 'The Dog Ran To The...',
    body: 'The Store'
  };

  it('Should return and empty object if no action is passed in', () => {
    expect(forumReducer({}, {type: null})).toEqual({});
  });

  it('Should add a new post', () => {
    const { id } = payload;
    expect(forumReducer(init, actions.postAdded(payload))).toEqual({ [id]:{ ...payload } });
  });

  it('Should delete a post', () => {
    const { id } = payload;
    expect(forumReducer({[id]: payload}, actions.postDeleted(payload))).toEqual({});
  });

});