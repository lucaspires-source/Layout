
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: var(--darkgreen);
  height: 140px;
  display: flex;
  position:relative;
  justify-content: space-around;
  align-items: center;
`

export const NavLogo = styled.div`
    font-size: 1.5rem;
    flex:8;  
    align-items:center;
    justify-content:center;
`
export const BrandLink = styled(Link)`
    color:#fff;
    text-decoration:none;
    align-items:center;
    justify-content:center;
    font-size:50px;
    @media screen and (max-width: 1200px) {
    padding-left:50px;
    font-size:50px;
  }

`
export const NavLink = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  margin:0;
  height: 100%;
  
  cursor: pointer;
    >a{
    display: block;
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    font-size:30px;
    @media screen and (max-width: 768px) {
    display: none;
  }
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  flex:3;
  @media screen and (max-width: 960px) {
  margin-right:0;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  height: 100px;
  font-size:28px;
  align-items: center;
  @media screen and (max-width: 960px) {
    height: 100px;
    font-size:28px;
    padding-right:50px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 7px;
  background: #fff;
  padding: 10px 22px;
  color: var(--green);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: var(--green);
    color: #fff;
  }
`;
