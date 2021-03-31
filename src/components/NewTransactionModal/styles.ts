import styled from 'styled-components'
import theme from 'styles/theme'
import { darken } from 'polished'

export const Form = styled.form`
  position: relative;
`

export const TitleForm = styled.h2`
  color: ${theme.colors.textTitle};
  font-size: 2.4rem;
  margin-bottom: 3.2rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0 2.4rem;
  height: 6.4rem;
  border-radius: ${theme.border.radius};
  border: 1px solid ${theme.colors.gray};
  background-color: ${theme.colors.backgroundSecondary};

  font-weight: 400;
  font-size: ${theme.font.sizes.large};

  &::placeholder {
    color: ${theme.colors.textBody};
  }

  & + Input {
    margin-top: 1.6rem;
  }
`

export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 0 2.4rem;
  height: 6.4rem;
  background-color: ${theme.colors.green};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius};
  border: 0;
  font-size: ${theme.font.sizes.large};
  margin-top: 2.4rem;
  transition: filter 0.2s;
  font-weight: 600;

  :hover {
    filter: brightness(0.9);
  }
`
export const ButtonCloseModal = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border: 0;
  background-color: transparent;
  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`

export const TransactionContainer = styled.div`
  margin: ${theme.spacings.large} 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const ButtonTransaction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.1rem solid #d7d7d7;
  border-radius: ${theme.border.radius};
  height: 6.4rem;
  background-color: transparent;
  transition: border-color 0.2s;

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    display: inline-block;
    margin-left: ${theme.spacings.large};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.textTitle};
  }

  :hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`
