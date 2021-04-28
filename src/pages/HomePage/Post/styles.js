import styled from 'styled-components';

export const CardStyles = styled.div`
  color: black;
  box-shadow: 0 0 5px black;
  margin: 5px;
  white-space: pre-line;

  > div:nth-child(odd) {
    background-color: dimgray;
    display: flex;
    justify-content: space-between;
    color: wheat;
    margin: 10px;
  }

`;
export const ButtonContainer = styled.div`
  > button { margin: 0 5px; border: none; box-shadow: none;}
  > button:nth-child(2) { background-color: green !important;}
  > button:nth-child(3) { background-color: red !important;}
`;

export const Score = styled.span`
  margin-right: 10px;
`