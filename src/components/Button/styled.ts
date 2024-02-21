import { css, styled } from 'styled-components';

interface ButtonStyledProps {
  size: 'small' | 'medium' | 'large';
  label?: string;
  color: string;
  $border?: string;
  $background: string;
  $hoverActive?: string;
  $colorHover?: string;
}

export const Button = styled.button<ButtonStyledProps>`
  background-color: ${props => props.$background};
  color: ${props => props.color};
  border: ${props => props.$border};
  border-radius: ${({ theme }) => theme.linesEdges.radius300};

  ${props =>
    props.size === 'large' &&
    css`
      font-size: ${({ theme }) => theme.fonts.size.sm};
      padding: ${({ theme }) => theme.innerPadding.squishLg};
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      font-size: ${({ theme }) => theme.fonts.size.xs};
      padding: ${({ theme }) => theme.innerPadding.squishMd};
    `}

  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${({ theme }) => theme.fonts.size.base};
      padding: ${({ theme }) => theme.innerPadding.squishSm};
    `}

  &:hover {
    background-color: ${props => props.$hoverActive};
    color: ${props => props.$colorHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.action.colorActionDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.action.colorActionLightest};
  }
`;
