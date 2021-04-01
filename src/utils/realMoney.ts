export function RealMoney(amount: number) {
  try {
    const money = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount)

    return money
  } catch (error) {
    console.error('Error conversion money: ' + amount)
  }
}
