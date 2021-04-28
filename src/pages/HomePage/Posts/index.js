import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post';

const Posts = props => {
  const {forumReducer :posts} = props;
  return (
    <>
      { Object.values(posts).map((post) => <Post post={post} />) }
    </>
  );
}

export default connect(state => state)(Posts);