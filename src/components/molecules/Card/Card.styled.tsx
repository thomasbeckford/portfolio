import styled from '@styled'

export const CardContainer = styled.div`
  height: auto;
  width: 100%;
  background: ${props => props.theme.color.cardBackground};
  border-radius: 12px;
  color: ${props => props.theme.color.primary};

  @media (min-width: 768px) {
    margin: 0.5em;
    background: ${props => props.theme.color.cardBackground};
    padding: 2em;
    border-radius: 12px;
    color: ${props => props.theme.color.primary};
  }
`
export const CardHeader = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  padding-left: 10px;

  @media (min-width: 768px) {
    display: block;
    padding-top: 10px;
    padding-left: 0;
  }
`

export const CardTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
  padding-left: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
    font-size: 45px;
    font-weight: 400;
    padding-left: 0;
  }
`
export const CardDescription = styled.div`
  padding: 20px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    line-height: 28px;
    opacity: 70%;
    font-size: 20px;
    padding: 0px;
    marign: 0px;
  }
`
