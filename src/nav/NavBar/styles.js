import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  height: var(--nav-height);
  justify-content: space-between;
  background-color: lightgray;
  flex-wrap: wrap;
  padding: 5px;
`

export const Logo = styled.div``

export const NavLinks = styled.div`
  display: flex;
  & > * {
    text-decoration: none;
    background-color: gray;
    color: whitesmoke;
    padding: 5px;
    margin: 0 5px;

    :hover {
      color: green;
      background-color: black;
      transition: .2s;
    }
  }
`
