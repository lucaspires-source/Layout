import styled from 'styled-components'

export const CardContainer = styled.div `
width:600px;
height:300px;
overflow:hidden;
box-shadow:0px 0px 15px -5px;
display:flex;
align-items:center
`



export const ImageContainer = styled.div `
>img{
    overflow:hidden;
    height:300px;
}

`


export const SideContainer = styled.div `

    overflow:hidden;
    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center
`




export const CardTitle = styled.div `
color:var(--blue);
font-weight:700;
font-size:28px;
padding-bottom:20px;
text-align:center;
`


export const CardButton = styled.button `
border-radius: 7px;
  height:55px;
  width:150px;  
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