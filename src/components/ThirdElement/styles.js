import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction:column;
height:1000px;
width: 700px;
justify-content:flex-end;
margin-left:1200px;
padding:10px;
@media screen and (max-width: 1000px) {
    width:100%;
    margin-left:0px;
    justify-content:center;
    align-items:center;
    background-color:#fff;
  }
` 

export const Title = styled.h1`
color:var(--blue);
font-weight:700;
font-size:50px;
padding-bottom:30px;
@media screen and (max-width: 850px) {
  font-size:30px;
}
`

export const Subtitle = styled.h4`
color:var(--lightgray);
font-weight:500;
font-size:20px;
padding-bottom:30px;

`

export const Button = styled.button`
border-radius: 7px;
  height:60px;
  width:180px;  
  background: var(--green);
  padding: 10px 22px;
  font-size:18px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;  
  margin-left:20px;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  &:hover {
    background: var(--darkgreen);
    color: #fff;

  }
`