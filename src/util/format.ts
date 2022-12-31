export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'decimal',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 3,
})

export const { format: formatPriceWithCurrecy } = new Intl.NumberFormat(
  'pt-br',
  {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  },
)
