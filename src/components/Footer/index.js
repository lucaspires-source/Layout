import React from 'react'
import {FooterWrap,FooterLeft,FooterRight} from './styles'
const Footer = () => {
    return (
        <FooterWrap>
            <FooterLeft>
                <h4> © Copyrights 2019. All Rigths Reserved</h4>
            </FooterLeft>
            <FooterRight>
                <h4>Privacy Policy</h4>
                <h4>Terms and Conditions</h4>
            </FooterRight>
        </FooterWrap>
    )
}

export default Footer
