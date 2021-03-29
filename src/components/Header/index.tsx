import logoImg from '../../assets/logo.svg'
import * as S from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewTransactionModal
}: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image
          src={logoImg}
          alt="Logo com símbolo de cifrão, com fundo verde e ao lado escrito dt-money"
        />
        <S.Button onClick={onOpenNewTransactionModal}>Nova transação</S.Button>
      </S.Container>
    </S.Wrapper>
  )
}
