import { Moment } from 'moment'

export type MonthPickerDate = Moment | null

export interface MonthPickerProps {
  onChange: (newDate: MonthPickerDate) => void
  selectedDate: MonthPickerDate
  startDate: MonthPickerDate
}
