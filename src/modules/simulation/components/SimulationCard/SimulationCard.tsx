import React, { useEffect, useMemo, useState } from 'react'
import moment from 'moment'

// ASSETS
import { Dollar, House } from '~/assets/icons'

// COMPONENTS
import { Button, CurrencyInput, MonthPicker } from '~/shared/components'
import { Goal, MonthSaving } from '~/modules/simulation/components'

// HELPERS
import { formatToCurrency, getDifferenceOfMonths } from '~/shared/helpers'

// STYLES
import './SimulationCard.scss'

// TYPES
import { MonthPickerDate } from '~/shared/components/MonthPicker/types'
import { NumberFormatValues } from 'react-number-format'

export const SimulationCard = (): JSX.Element => {
  const [savingMoney, setSavingMoney] = useState<NumberFormatValues | null>(null)
  const [selectedDate, setSelectedDate] = useState<MonthPickerDate>(moment().add(1, 'month'))

  const _locale = navigator.language || 'en-US'
  const _startDate = moment().add(1, 'month')
  const _isSubmitAllowed =
    !!savingMoney && savingMoney.floatValue && savingMoney.floatValue > 0 && !!selectedDate

  const _getNumberOfMonths = (): number => {
    if (!selectedDate) return 0

    return getDifferenceOfMonths(selectedDate, moment())
  }

  const _getFormatedDate = (): string => {
    return moment(selectedDate || _startDate).format('MMMM YYYY')
  }

  const _getMoneyPerMonth = (): string => {
    const months = _getNumberOfMonths()

    if (!months || months === 0) return '$0'
    if (!savingMoney || !savingMoney.floatValue || savingMoney.floatValue === 0) return '$0'

    const moneyPerMonth = savingMoney.floatValue / _getNumberOfMonths()

    return formatToCurrency(moneyPerMonth, _locale)
  }

  const monthSaving = (
    <MonthSaving
      amountOfMonths={_getNumberOfMonths()}
      goalDate={_getFormatedDate()}
      moneyPerMonth={_getMoneyPerMonth()}
      totalSaved={savingMoney?.formattedValue || '0'}
    />
  )

  return (
    <div className="SimulationCard">
      <h2 className="title">
        Let&#39;s plan your <strong>saving goal</strong>.
      </h2>

      <form className="card">
        <div className="card__header">
          <Goal icon={<House />} name="Buy a house" />
        </div>

        <div className="card__body">
          <div className="card__wrapper">
            <div className="formGroup">
              <label className="formGroup__label">Total amount</label>
              <CurrencyInput
                leftIcon={<Dollar />}
                onValueChange={(values) => setSavingMoney(values)}
                required
                placeholder="25,000"
                value={savingMoney?.value}
              />
            </div>

            <div className="formGroup">
              <label className="formGroup__label">Reach goal by</label>
              <MonthPicker
                onChange={(newDate): void => setSelectedDate(newDate)}
                selectedDate={selectedDate}
                startDate={_startDate}
              />
            </div>
          </div>

          {monthSaving}
        </div>

        <div className="Card__footer">
          <Button category="primary" disabled={!_isSubmitAllowed} type="submit">
            Confirm
          </Button>
        </div>
      </form>
    </div>
  )
}
