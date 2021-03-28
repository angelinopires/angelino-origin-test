import React from 'react'
import { NumberFormatProps } from 'react-number-format'

export interface CurrencyInputProps extends NumberFormatProps {
  leftIcon?: typeof React.Component | JSX.Element
}
