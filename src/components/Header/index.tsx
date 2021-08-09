import logoImg from '../../assets/logo.svg'
import * as S from './styles'
import { Button } from '../Button'

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
        <Button onClick={onOpenNewTransactionModal}>Nova transação</Button>
      </S.Container>
    </S.Wrapper>
  )
}
