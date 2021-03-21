import logoImg from '../../assets/logo.svg'

import * as S from './styles'

export const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image
          src={logoImg}
          alt="Logo com símbolo de cifrão com fundo verde e ao lado escrito dt-money"
        />
        <S.Button>Nova transação</S.Button>
      </S.Container>
    </S.Wrapper>
  )
}
