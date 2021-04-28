import React from 'react';
import styled from 'styled-components';

const Dog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Secret = () => {
 return (
    <Dog>
      <h1>TURN BACK</h1>
      <img
        src={'https://ih1.redbubble.net/image.378986184.4857/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg'}
        alt={'DOG'}
      />
    </Dog>
  )
}

export default Secret