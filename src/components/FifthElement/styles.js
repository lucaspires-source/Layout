import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';


export const Container = styled.div`
display:flex;
flex-direction:column;
height:300px;
width: 700px;
margin-left:300px;
padding:50px;
text-align:start;

` 

export const Title = styled.h1`
color:var(--blue);
font-weight:700;
font-size:50px;

`

export const Input = styled(TextField)`
width:80%;
`

export const Button = styled.button`
border-radius: 7px;
  height:55px;
  width:95px;  
  background: var(--green);
  padding: 10px 22px;
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