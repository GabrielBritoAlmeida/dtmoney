import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin-top: -8rem;
  padding: 0 1.6rem;
`
export const Box = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.border.radius};
  padding: ${theme.spacings.large};

  &.highlight-background {
    background-color: ${theme.colors.green};
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleHeader = styled.p`
  font-size: ${theme.font.sizes.xlarge};
`

export const Value = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 3.6rem;
  font-weight: 500;
`
