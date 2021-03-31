export const formatToCurrency = (value: number | bigint, locale = 'en-US'): string => {
  const currencyFormater = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })

  return currencyFormater.format(value)
}
