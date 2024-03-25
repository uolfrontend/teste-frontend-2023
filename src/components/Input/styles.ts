import styled, { css } from 'styled-components'

interface IInput {
  $disabled?: boolean
  $hasResults?: boolean
  $resultNotFound?: boolean
  $focused?: boolean
}

export const Container = styled.div<IInput>`
  position: relative;
  border-width: ${({ theme }) => theme.lines.stroke100};
  border-style: solid;
  border-color: ${({ theme }) => theme.color.neutral.medium04};
  border-radius: ${({ theme }) => theme.edges.radius200};
  width: 100%;
  height: 44px;
  max-width: 50rem;
  padding-inline: ${({ theme }) => theme.spacing.xxs};
  padding-block: ${({ theme }) => theme.spacing.xxxs};
  transition: all 0.3s ease;

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.color.neutral.medium02};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.xs};
    line-height: ${({ theme }) => theme.font.lineHeight.medium};
    left: ${({ theme }) => theme.spacing.xxs};
    transition: all 0.3s ease;
    z-index: 1;
  }

  input {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100% - 32px);
    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.color.neutral.dark};
    border: none;
    outline: none;
    background-color: transparent;
    z-index: 2;
  }

  input:focus {
    top: 28px;
  }

  input:focus + label {
    top: ${({ theme }) => theme.spacing.micro};
    font-size: ${({ theme }) => theme.font.size.nano};
  }

  &:has(input:disabled) {
    label {
      color: ${({ theme }) => theme.color.neutral.medium04};
    }
  }

  ${({ $focused }) =>
    $focused &&
    css`
      border-color: ${({ theme }) => theme.color.action.medium};
    `}

  ${({ $hasResults }) =>
    $hasResults &&
    css`
      border-color: ${({ theme }) => theme.color.alert.success};
    `}

  ${({ $resultNotFound }) =>
    $resultNotFound &&
    css`
      border-color: ${({ theme }) => theme.color.alert.error};
    `}
`
