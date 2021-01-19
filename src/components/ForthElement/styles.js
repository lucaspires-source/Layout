import styled from 'styled-components'


export const Container = styled.div`
    height:100px;
    width:800px;
    align-items:center;
    margin-bottom:200px;
    @media screen and (max-width: 850px) {
    width:100%;
    padding:1px;
    margin-bottom:100px;
  }

`

export const Title = styled.h1`
color:var(--blue);
font-weight:700;
font-size:50px;
margin-top:30px;
text-align:center;
padding-bottom:5px;
@media screen and (max-width: 850px) {
    font-size:40px;
  }
`

export const Subtitle = styled.h4`
color:var(--lightgray);
font-weight:500;
font-size:28px;
text-align:center;
@media screen and (max-width: 850px) {
    font-size:20px;
  }
`
