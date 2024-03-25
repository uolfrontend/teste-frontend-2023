import styled, { css } from 'styled-components'

interface IButton {
  $size?: 'small' | 'medium' | 'large'
  $variation?: 'primary' | 'secondary'
  $disabled?: boolean
}

export const Button = styled.button<IButton>`
  background-color: ${({ theme }) => theme.color.action.medium};
  border: none;
  padding: ${({ theme }) => theme.spacingSquish.sm};
  border-radius: ${({ theme }) => theme.edges.radius300};
  color: ${({ theme }) => theme.color.neutral.lightest};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: ${({ theme }) => theme.font.lineHeight.tightest};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.action.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.action.dark};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: ${({ theme }) => theme.color.action.lightest};
      cursor: initial;

      &:hover {
        background-color: ${({ theme }) => theme.color.action.lightest};
      }

      &:active {
        background-color: ${({ theme }) => theme.color.action.lightest};
      }
    `}

  ${({ $variation }) =>
    $variation === 'secondary' &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.color.action.medium};
      border-color: ${({ theme }) => theme.color.action.medium};
      border-width: ${({ theme }) => theme.lines.stroke100};
      border-style: solid;

      &:hover {
        background-color: transparent;
      }

      &:active {
        background-color: transparent;
      }
    `}

  ${({ $size }) =>
    $size === 'medium' &&
    css`
      font-size: ${({ theme }) => theme.font.size.xs};
      padding: ${({ theme }) => theme.spacingSquish.md};
    `}

  ${({ $size }) =>
    $size === 'large' &&
    css`
      font-size: ${({ theme }) => theme.font.size.sm};
      padding: ${({ theme }) => theme.spacingSquish.lg};
    `}
`
