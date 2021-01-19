import styled from 'styled-components';

export const Container = styled.header`
    height:100px;
    width:800px;
    padding-top:100px;
    margin-bottom:300px;
    align-items:center;
    @media screen and (max-width: 850px) {
    width:100%; 
    margin-bottom:0;
  }
`

export const Title = styled.h1`
color:var(--blue);
font-weight:700;
font-size:50px;
padding-bottom:30px;
text-align:center;
@media screen and (max-width: 850px) {
  display:none;
  }
`

export const Subtitle = styled.h4`
color:var(--lightgray);
font-weight:500;
font-size:28px;

margin-bottom:500px;
text-align:center;
@media screen and (max-width: 850px) {
  display:none;
  }
`

export const CardContainer = styled.div`
  height:600px;
  width: 1200px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;
  grid-column-gap:30px;
  grid-row-gap:35px;
  @media screen and (max-width: 900px) {
    grid-template-columns:1fr;
    width:100%;
    padding-left:20px;
  }
  `