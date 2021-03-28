import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<{}> {
  category: 'primary'
  size?: 'lg' | 'md' | 'sm'
}
