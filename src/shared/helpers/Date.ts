import moment from 'moment'
import { MonthPickerDate } from '~shared/components/MonthPicker/types'

export const getFormatedMonth = (date: MonthPickerDate): string | null => {
  if (!date) return null

  return moment(date).format('MMMM')
}

export const getFormatedYear = (date: MonthPickerDate): string | null => {
  if (!date) return null

  return moment(date).format('YYYY')
}

export const getDifferenceOfMonths = (
  futureDate: MonthPickerDate,
  pastDate: MonthPickerDate
): number => {
  if (!pastDate || !futureDate) return 0

  const differenceInMonths = moment(futureDate).diff(moment(pastDate), 'months', true)

  return Math.abs(Math.round(differenceInMonths))
}
