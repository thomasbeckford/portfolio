import React from 'react'

import { FooterContainer, FooterTop, Copy } from './Footer.styled'

function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <FooterTop className="pattern">
        {/* <FooterDates>
          <Mail>tebeckford@gmail.com</Mail>
        </FooterDates> */}
      </FooterTop>
      <Copy>2020 Copyright All Rights Reserved</Copy>
    </FooterContainer>
  )
}

export default Footer
