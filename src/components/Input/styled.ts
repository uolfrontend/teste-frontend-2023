import { styled } from 'styled-components';

interface InputFieldProps {
  $valid: boolean;
  $focused: boolean;
  $hasTyped: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.nano};
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input<InputFieldProps>`
  background-color: ${({ theme }) => theme.colors.neutral.colorNeutralLightest};
  border: ${({ theme }) => theme.linesEdges.stroke100}
    ${({ theme }) => theme.colors.neutral.colorNeutraMedium04};
  border-radius: ${({ theme }) => theme.linesEdges.radius200};
  padding: ${({ theme }) => theme.spacing.xxxs}
    ${({ theme }) => theme.spacing.xxs};
  color: ${({ theme }) => theme.colors.neutral.colorNeutraDark};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  line-height: ${({ theme }) => theme.fonts.lineHeight.medium};
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border: ${({ theme }) => theme.linesEdges.stroke100}
      ${({ theme, $valid, $hasTyped }) =>
        $hasTyped
          ? $valid
            ? `${theme.colors.alert.colorAlertSuccess}`
            : `${theme.colors.alert.colorAlertError}`
          : `${theme.colors.action.colorActionMedium}`};
    padding: ${({ theme }) => theme.spacing.xxxs}
      ${({ theme }) => theme.spacing.xxs};
    outline: none;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.neutral.colorNeutraMedium02};
  font-size: ${({ theme }) => theme.fonts.size.xs};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeight.medium};
  position: absolute;
  top: ${({ theme }) => theme.spacing.xxxs};
  left: ${({ theme }) => theme.spacing.xxs};
  pointer-events: none;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    font-size: ${({ theme }) => theme.fonts.size.nano};
    top: ${({ theme }) => theme.spacing.nano};
    left: ${({ theme }) => theme.spacing.xxs};
  }
`;
