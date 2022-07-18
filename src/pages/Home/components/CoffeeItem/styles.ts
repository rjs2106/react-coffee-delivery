import styled from 'styled-components';

export const CoffeeItemContainer = styled.div`
  width: 14rem;
  flex-direction: column;
  text-align: center;
  height: 16rem;
  background-color: ${props => props.theme.grey_200};
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  align-items: center;
  position: relative;

  img {
    width: 6rem;
    position: absolute;
    top: -20px;
  }


`

export const Badges = styled.div`
  span {
    margin-top: 5.5rem;
    background-color: ${props => props.theme.yellow_300};
    color: ${props => props.theme.yellow_700};
    padding: 0.4rem 0.8rem;
    border-radius: 99999px;
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`

export const Title = styled.h1`
  font-size: 1rem;
`

export const Description = styled.p`
  font-size: 0.725rem;
  text-align: center;
  padding: 0 1rem;
  color: ${props => props.theme.grey_600};
`



