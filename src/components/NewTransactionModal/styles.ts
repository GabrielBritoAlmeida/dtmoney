import styled from 'styled-components'
import theme from 'styles/theme'

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
  border: 1px solid #d7d7d7;
  background-color: #e7e9ee;

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
