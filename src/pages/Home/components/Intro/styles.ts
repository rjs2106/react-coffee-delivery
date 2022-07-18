import styled from 'styled-components';

//Types
interface ItemProps {
  background?: string;
}

// Styles
export const IntroContainer = styled.section`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
`

export const LeftContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3.5rem;
    line-height: 4rem;
    color: ${props => props.theme.grey_900}
  }

  p {
    font-size: 1rem;
    margin-top: 1.5rem;
    color: ${props => props.theme.grey_700}
  }
`

export const RightContainer = styled.div`
  transition: filter 0.5s;

  &:hover {
    filter: brightness(1.2)
  }
`
export const Descriptions = styled.div`
  display: grid;
  margin-top: 1.5rem;
  grid-template-columns: 1fr 1fr;
`

export const Item = styled.div<ItemProps>`
 line-height: 3rem;
 gap: 1rem;
 display: flex;
 align-items: center;
 color: ${props => props.theme.grey_600};

 svg {
    background-color: ${
      props => props.background ? props.background : props.theme.purple_700
    };
    color: ${props => props.theme.white};
    padding: 0.5rem;
    border-radius: 9999px;
    font-size: 1rem;
  }
`