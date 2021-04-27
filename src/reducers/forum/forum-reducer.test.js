import forumReducer from './forum-reducer';
import * as actions from './actions';

describe('forumReducer', () => {
  const init = {}
  const payload = {
    id: 1,
    title: 'The Dog Ran To The...',
    body: 'The Store'
  }

  test('Should return and empty object if no action is passed in', () => {
    expect(forumReducer({}, {type: null})).toEqual({})
  });

  test('Should add a new post', () => {
    expect(forumReducer(init, actions.postAdded(payload))).toEqual({1:{...payload}})
  });

});