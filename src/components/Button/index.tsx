import * as S from './styles'

interface IButton {
  textButton?: string
  size?: 'small' | 'medium' | 'large'
  variation?: 'primary' | 'secondary'
  disabled?: boolean
}

export function Button({
  textButton = 'button',
  size = 'small',
  variation = 'primary',
  disabled = false,
}: IButton) {
  console.log(disabled)
  return (
    <S.Button $size={size} $variation={variation} $disabled={disabled}>
      {textButton}
    </S.Button>
  )
}
