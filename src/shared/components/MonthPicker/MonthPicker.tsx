import React, { memo, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

// ASSETS
import { Arrow } from '~/assets/icons'

// HELPERS
import { getFormatedMonth, getFormatedYear } from '~/shared/helpers'

// STYLES
import 'react-datepicker/dist/react-datepicker.css'
import './MonthPicker.scss'

// TYPES
import { MonthPickerDate, MonthPickerProps as Props } from './types'

export const MonthPicker = memo<Props>(function MonthPicker({
  onChange,
  selectedDate,
  startDate,
}: Props): JSX.Element {
  const _selectedDateRef = useRef(selectedDate)
  const _windowRef = useRef(window)

  const _convertedDate = moment(startDate).toDate()
  const _isSelectedDateInThePast = _selectedDateRef.current?.isSameOrBefore(startDate)

  const _setSelectedDate = (newDate: MonthPickerDate): void => {
    _selectedDateRef.current = newDate
    onChange(newDate)
  }

  const setBackwardMonth = (): void => {
    if (!_selectedDateRef.current || _selectedDateRef.current.isSameOrBefore(startDate)) return

    const newDate = moment(_selectedDateRef.current).subtract(1, 'month')
    _setSelectedDate(newDate)
  }

  const setForwardMonth = (): void => {
    if (!_selectedDateRef.current) return

    const newDate = moment(_selectedDateRef.current).add(1, 'month')
    _setSelectedDate(newDate)
  }

  const handleKeyDown = (event: KeyboardEvent): void => {
    event.stopImmediatePropagation()

    if (event.key === 'ArrowLeft') {
      setBackwardMonth()
    }

    if (event.key === 'ArrowRight') {
      setForwardMonth()
    }

    return
  }

  useEffect(() => {
    if (!_windowRef.current) return

    _windowRef.current.addEventListener('keydown', (event: KeyboardEvent): void => {
      handleKeyDown(event)
    })

    return _windowRef.current.removeEventListener('keydown', (event: KeyboardEvent) => {
      handleKeyDown(event)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="MonthPicker">
      <button
        className="arrow"
        disabled={_isSelectedDateInThePast}
        onClick={setBackwardMonth}
        type="button"
      >
        <Arrow />
      </button>

      <div className="MonthPicker__picker">
        <div className="MonthPicker__date">
          <p>{getFormatedMonth(selectedDate)}</p>
          <p>{getFormatedYear(selectedDate)}</p>
        </div>

        <DatePicker
          dateFormat="MMMM/yyyy"
          minDate={_convertedDate}
          onChange={(date: Date): void => _setSelectedDate(moment(date))}
          required
          selected={moment(selectedDate).toDate()}
          showFullMonthYearPicker
          showMonthYearPicker
          startDate={_convertedDate}
        />
      </div>

      <button className="arrow arrow--right" onClick={setForwardMonth} type="button">
        <Arrow />
      </button>
    </div>
  )
})
