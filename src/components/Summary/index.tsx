import * as S from './styles'
import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import totalImg from 'assets/total.svg'

const Summary: React.FC = () => {
  return (
    <S.Wrapper>
      <div>
        <header>
          <p>Entradas</p>
          <img
            src={incomeImg}
            alt="Ícone com circulo e uma seta apontando para cima"
          />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img
            src={outcomeImg}
            alt="Ícone com circulo e uma seta apontando para baixo"
          />
        </header>
        <strong>R$200,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img
            src={totalImg}
            alt="Ícone com circulo e uma seta apontando para cima"
          />
        </header>
        <strong>R$1000,00</strong>
      </div>
    </S.Wrapper>
  )
}

export default Summary
