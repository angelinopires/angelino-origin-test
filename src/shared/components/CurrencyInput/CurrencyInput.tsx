import React from 'react'
import classNames from 'classnames'
import NumberFormat from 'react-number-format'

// STYLES
import './CurrencyInput.scss'

// TYPES
import { CurrencyInputProps as Props } from './types'

export const CurrencyInput = ({ className, leftIcon, ...rest }: Props): JSX.Element => {
  const inputClasses = classNames('Input', className, {
    ['Input--withLeftIcon']: leftIcon,
  })

  return (
    <div className={inputClasses}>
      {leftIcon}
      <NumberFormat
        allowNegative={false}
        className="Input__field"
        decimalScale={0}
        displayType="input"
        maxLength={15}
        thousandSeparator={true}
        {...rest}
      />
    </div>
  )
}
