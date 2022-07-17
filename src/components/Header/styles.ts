import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6.5rem;
  padding: 0 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.5rem;

  & > div:first-child {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: ${props => props.theme.purple_300};
    color: ${props => props.theme.purple_700};
  }


  & > div > svg {
    color: ${props => props.theme.purple_700};
    font-size: 1.25rem;
  }
`

export const CartButton = styled.button`
  border-radius: 6px;
  background-color: ${props => props.theme.yellow_300};
  color: ${props => props.theme.yellow_700};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  border: none;
  padding: 0.5rem;
  border: 1px solid transparent;
  position: relative;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    filter: brightness(1.05);
    cursor: pointer;
    border: 1px solid ${props => props.theme.yellow_700}
  }

  &:disabled  {
    cursor: not-allowed;
  }
`;

export const Counter = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 9999px;
  position: absolute;
  background-color: ${props => props.theme.yellow_700};
  color: ${props => props.theme.white};
  padding: 2px 6px;
  right: -8px;
  top: -10px;

  ${
    ({ children }) => children && children.toString().length > 1 && css`
      right: -16px;
    `
  }

`