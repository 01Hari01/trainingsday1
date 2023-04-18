import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  position: sticky;
  top: 0;
  z-index: 999;

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;

    li {
      margin-left: 1rem;
      font-size: 1.2rem;
      cursor: pointer;
    }

    li:hover {
      text-decoration: underline;
    }
  }
`;
