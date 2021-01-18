import styled from 'styled-components'


export const BlogCardContainer = styled.div`
width:600px;
height:900px;
border:transparent 0.1px black;
display:flex;
align-items:center;
flex-direction:column;


` 
export const ImageContainer = styled.div`
>img{
    height:500px;
    width:600px;
}


`

export const CardTitle = styled.div`
color:var(--blue);
font-weight:700;
font-size:25px;
padding-bottom:20px;
text-align:start;
width:300px;
height: 200px;

`
export const AvatarContainer = styled.div` 
display:flex;
align-items:flex-start;
width:300px;
height: 200px;
>img{
    height:35px;
    width:35px;
    border-radius:50%;
}
>p{
    color:var(--lightgray);
    padding-left:10px;
}
`

