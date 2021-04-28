import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {CardStyles, ButtonContainer, Score} from './styles';

const Post = props => {
  console.log(props);
  return (
    <CardStyles as={Card}>
      <Card.Header>
        {props.post.title}
        <ButtonContainer>
          <Score>5</Score>
          <Button>+</Button>
          <Button>-</Button>
        </ButtonContainer>
      </Card.Header>
      <Card.Body>
        {props.post.body}
      </Card.Body>
    </CardStyles>
  );
}

export default Post;