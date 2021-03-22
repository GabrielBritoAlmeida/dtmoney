import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.header`
  background-color: ${theme.colors.blue};
  padding: 0 1.6rem;
`
export const Container = styled.div`
  max-width: ${theme.grid.container};
  margin: 0 auto;

  padding: 3.2rem 0rem 14rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Image = styled.img``

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
