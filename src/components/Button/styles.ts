import styled from 'styled-components'
import theme from 'styles/theme'

export const Button = styled.button`
  font-size: ${theme.font.sizes.large};
  color: ${theme.colors.white};
  background-color: ${theme.colors.blueLight};
  border: 0;
  padding: 0 3.2rem;
  border-radius: ${theme.border.radius};
  height: 4.8rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
