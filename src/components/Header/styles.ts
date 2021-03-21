import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.header`
  background-color: ${theme.colors.blue};
`
export const Container = styled.div`
  max-width: ${theme.grid.container};
  margin: 0 auto;

  padding: 3.2rem 1.6rem 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Image = styled.img``

export const Button = styled.button`
  font-size: 1.6rem;
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
