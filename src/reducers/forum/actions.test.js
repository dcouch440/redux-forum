import * as actions from './actions';

describe('forum actions', () => {
  const payload = {
    id: 1,
    title: 'The Dog Ran To The...',
    body: 'The Store'
  };
  it('should add a post with postAdded ', () => {
    expect(actions.postAdded(payload)).toEqual({type: 'ADD_POST', ...payload});
  });
  it('should delete a post with postDeleted', () => {
    expect(actions.postDeleted(payload)).toEqual({type: 'REMOVE_POST', ...payload});
  });
});