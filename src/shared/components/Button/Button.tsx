import React from 'react'
import classNames from 'classnames'

// STYLES
import './Button.scss'

// TYPES
import { ButtonProps as Props } from './types'

export const Button = ({
  category,
  children,
  className,
  size = 'md',
  ...rest
}: Props): JSX.Element => {
  const buttonClasses = classNames('Button', className, {
    [`Button--${category}`]: category,
    [`Button--${size}`]: size,
  })

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}
