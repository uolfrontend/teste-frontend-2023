import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton?: string
  size?: 'small' | 'medium' | 'large'
  variation?: 'primary' | 'secondary'
  disabled?: boolean
  isLoading?: boolean
}

export function Button({
  textButton = 'button',
  size = 'small',
  variation = 'primary',
  disabled = false,
  isLoading = false,
  ...rest
}: IButton) {
  return (
    <S.Button
      {...rest}
      $size={size}
      $variation={variation}
      $disabled={disabled}
    >
      {isLoading ? 'loading...' : textButton}
    </S.Button>
  )
}
