import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: 'primary'
  size?: 'lg' | 'md' | 'sm'
}
