import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div `
    display: grid;
    place-items: center;
    margin-top: auto;
    padding: 50px 0;
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
`

const Footer: FunctionComponent = () => {
    return (
        <FooterWrapper>
            Thank You for Visiting My Blog, Have a Nice Day 🧡
            <br/> © 2021 Developer Mina, Powered By Gatsby.
        </FooterWrapper>
    )
}

export default Footer