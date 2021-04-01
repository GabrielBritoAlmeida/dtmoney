export function ConversionDate(date: string) {
  try {
    const currentDate = new Date(date)
    const converteDate = new Intl.DateTimeFormat('pt-BR').format(currentDate)

    return converteDate
  } catch (error) {
    console.error('Error conversion date: ' + date)
  }
}
