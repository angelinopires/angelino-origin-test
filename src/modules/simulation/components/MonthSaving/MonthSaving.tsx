import React from 'react'

// TYPES
import { MonthSavingProps as Props } from './types'

export const MonthSaving = ({
  amountOfMonths,
  goalDate,
  moneyPerMonth,
  totalSaved,
}: Props): JSX.Element => {
  return (
    <div className="MonthSaving">
      <div className="MonthSaving__header">
        <h3 className="MonthSaving__title">Monthly amount</h3>
        <span className="MonthSaving__money">${moneyPerMonth}</span>
      </div>

      <p className="MonthSaving__caption">
        You&#39;re planning <strong>{amountOfMonths} monthly deposits</strong> to reach your{' '}
        <strong>${totalSaved}</strong> goal by <strong>{goalDate}</strong>.
      </p>
    </div>
  )
}
