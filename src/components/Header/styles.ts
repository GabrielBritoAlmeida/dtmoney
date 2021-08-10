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
