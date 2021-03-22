import * as S from './styles'
import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import totalImg from 'assets/total.svg'

const Summary: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Header>
          <S.TitleHeader>Entradas</S.TitleHeader>
          <img
            src={incomeImg}
            alt="Ícone com circulo e uma seta apontando para cima, indicando entrada de valor"
          />
        </S.Header>
        <S.Value>R$1000,00</S.Value>
      </S.Box>

      <S.Box>
        <S.Header>
          <S.TitleHeader>Saídas</S.TitleHeader>
          <img
            src={outcomeImg}
            alt="Ícone com circulo e uma seta apontando para baixo, indicando saída de valor"
          />
        </S.Header>
        <S.Value>R$200,00</S.Value>
      </S.Box>

      <S.Box className="highlight-background">
        <S.Header>
          <S.TitleHeader>Total</S.TitleHeader>
          <img
            src={totalImg}
            alt="Ícone com circulo e símbolo de cifrão para valor monetário, representando o valor total"
          />
        </S.Header>
        <S.Value>R$1000,00</S.Value>
      </S.Box>
    </S.Wrapper>
  )
}

export default Summary
