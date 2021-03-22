import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  margin-top: 6.4rem;
  max-width: ${theme.grid.container};
  margin: 0 auto;
  padding: 0 1.6rem;
`

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.8rem;
`

export const TableHeader = styled.thead``

export const Th = styled.th`
  color: ${theme.colors.textBody};
  font-weight: 400;
  text-align: left;
  line-height: ${theme.spacings.large};
`

export const Tr = styled.tr``

export const Td = styled.td`
  padding: 1.6rem 3.2rem;
  border: 0;
  background-color: ${theme.colors.shape};
  font-weight: normal;
`

export const TableBody = styled.tbody``
