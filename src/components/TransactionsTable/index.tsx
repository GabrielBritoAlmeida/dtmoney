import * as S from './styles'

export const TransactionsTable: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Table>
        <S.TableHeader>
          <S.Tr>
            <S.Th>Título</S.Th>
            <S.Th>Valor</S.Th>
            <S.Th>Categoria</S.Th>
            <S.Th>Data</S.Th>
          </S.Tr>
        </S.TableHeader>

        <S.TableBody>
          <S.Tr>
            <S.Td>Desenvolvimento de website</S.Td>
            <S.Td>R$12.000</S.Td>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>20/02/2021</S.Td>
          </S.Tr>

          <S.Tr>
            <S.Td>Desenvolvimento de website</S.Td>
            <S.Td>R$12.000</S.Td>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>20/02/2021</S.Td>
          </S.Tr>

          <S.Tr>
            <S.Td>Desenvolvimento de website</S.Td>
            <S.Td>R$12.000</S.Td>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>20/02/2021</S.Td>
          </S.Tr>
        </S.TableBody>
      </S.Table>
    </S.Wrapper>
  )
}
