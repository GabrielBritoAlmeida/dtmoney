import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  max-width: ${theme.grid.container};
  margin: 0 auto;
  padding: 2rem 1.6rem;
`

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.8rem;
`

export const TableHeader = styled.thead``

export const Th = styled.th`
  padding: 1.6rem 3.2rem;
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

  :first-child {
    color: ${theme.colors.textTitle};
  }
`
export const TdDeposit = styled.td`
  padding: 1.6rem 3.2rem;
  border: 0;
  background-color: ${theme.colors.shape};
  font-weight: normal;
  color: ${theme.colors.green};
`

export const TdWithDrown = styled.td`
  padding: 1.6rem 3.2rem;
  border: 0;
  background-color: ${theme.colors.shape};
  font-weight: normal;
  color: ${theme.colors.red};
`

export const TableBody = styled.tbody``
