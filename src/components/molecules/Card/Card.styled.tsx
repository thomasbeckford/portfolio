import styled from '@styled'

export const CardContainer = styled.div`
  height: auto;
  width: 100%;
  background: ${props => props.theme.color.cardBackground};
  border-radius: 12px;
  color: ${props => props.theme.color.primary};

  @media (min-width: 768px) {
    height: 420px;
    width: 270px;
    background: ${props => props.theme.color.cardBackground};
    padding: 70px 38px;
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
    font-size: 25px;
    font-weight: 500;
    padding-left: 0;
  }
`
export const CardDescription = styled.div`
  padding: 20px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 40px;
    line-height: 28px;
    opacity: 70%;
    font-size: 16px;
    padding: 0px;
    margin-bottom: 10px;
  }
`
