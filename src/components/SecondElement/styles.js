import styled from 'styled-components';

export const Container = styled.header`
    height:100px;
    width:800px;
    padding-top:100px;
    margin-bottom:300px;
    align-items:center;
`

export const Title = styled.h1`
color:var(--blue);
font-weight:700;
font-size:50px;
padding-bottom:30px;
text-align:center;
`

export const Subtitle = styled.h4`
color:var(--lightgray);
font-weight:500;
font-size:28px;

margin-bottom:500px;
text-align:center

`

export const CardContainer = styled.div`
  height:600px;
  width: 1200px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr;
  grid-column-gap:30px;
  grid-row-gap:35px;
`