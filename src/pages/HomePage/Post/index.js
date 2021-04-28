import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {CardStyles, ButtonContainer, Score} from './styles';
import { connect } from 'react-redux';
import * as actions from '../../../reducers/forum/actions';

const Post = props => {
  const { dispatch } = props;

  return (
    <CardStyles as={Card}>
      <Card.Header>
        {props.post.title}
        <ButtonContainer>
          <Score>{props.post.likes}</Score>
          <Button onClick = {() => dispatch(actions.postLiked(props.post)) }>+</Button>
          <Button onClick = {() => dispatch(actions.postUnliked(props.post)) }>-</Button>
        </ButtonContainer>
      </Card.Header>
      <Card.Body>
        {props.post.body}
      </Card.Body>
    </CardStyles>
  );
}

export default connect(state => state)(Post);