import styled from 'styled-components'


export const BlogCardContainer = styled.div`
width:600px;
height:900px;
border:transparent 0.1px black;
display:flex;
align-items:center;
flex-direction:column;
@media screen and (max-width: 850px) {
  width:100%;
  margin-bottom:100px;
  }

` 
export const ImageContainer = styled.div`
>img{
    height:500px;
    width:600px;
    @media screen and (max-width: 850px) {
     width:100%;
    margin-bottom:100px;
  }
}


`

export const CardTitle = styled.div`
color:var(--blue);
font-weight:700;
font-size:40px;
padding-bottom:15px;
text-align:start;
width:600px;
height: 200px;
@media screen and (max-width: 850px) {
  width:100%;
  height:110px;
  }
`
export const AvatarContainer = styled.div` 
display:flex;
align-items:flex-start;
width:600px;
height: 200px;
@media screen and (max-width: 850px) {
  width:100%;
  }
>img{
    height:50px;
    width:50px;
    border-radius:50%;
}
>p{
    color:var(--lightgray);
    padding-left:10px;
}
`

