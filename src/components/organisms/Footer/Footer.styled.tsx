import styled from '@styled'

export const FooterContainer = styled.div`
  @media (min-width: 768px) {
  }
  position: fixed;
  bottom: 0;
  width: 100%;
`
export const FooterTop = styled.div`
  @media (min-width: 768px) {
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #eceefd;
    border-bottom: 1px solid rgb(244 248 253 / 0.23);
    background: ${props => props.theme.color.footerBackground};
  }
`

export const Logo = styled.div``

export const FooterText = styled.p`
  font-size: 18px;
  font-weight: 300;
`

export const FooterDates = styled.div`
  font-size: 16px;
  font-weight: 300;
`

export const Phone = styled.p``

export const Mail = styled.a``

export const Copy = styled.div`
  @media (min-width: 768px) {
    display: flex;
    padding: 30px 0;
    justify-content: center;
    color: #eceefd;
    color: ${props => props.theme.color.white}
    font-size: 12px;
    background: ${props => props.theme.color.footerBackground};
  }
`
