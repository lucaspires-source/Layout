import styled from 'styled-components'


export const Button = styled.button`
border-radius: 7px;
  background: var(--green);
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.5s ease-in-out;
    background:var(--darkgreen);
  }
`;