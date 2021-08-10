import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/test/helpers'
import userEvent from '@testing-library/user-event'

import { Header } from '.'

describe('<Header />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should check that the onOpenNewTransactionModal method is called when clicking the button', async () => {
    const onOpenNewTransactionModal = jest.fn()
    renderWithTheme(
      <Header onOpenNewTransactionModal={onOpenNewTransactionModal} />
    )

    const button = screen.getByRole('button', { name: /nova transação/i })

    await userEvent.click(button)

    expect(onOpenNewTransactionModal).toHaveBeenCalledTimes(1)
  })
})
