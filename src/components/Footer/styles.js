import styled from 'styled-components';




export const FooterWrap = styled.div`
    width: auto;
    height: 130px;
    display: flex;
    text-align: center;
    justify-content: space-around;
    flex-wrap:wrap;
`


export const FooterLeft = styled.div`
    display: flex;
    color: var(--blue);
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 300;
    >h4{
        padding-left: 20px;
    }
    @media screen and (max-width: 400px) {
    padding-top:40px;
    font-size:20px;
  }
    

`


export const FooterRight = styled.div`
    color: var(--darkgrey);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 300;
    >h4{
        padding-left: 20px;
    }
`