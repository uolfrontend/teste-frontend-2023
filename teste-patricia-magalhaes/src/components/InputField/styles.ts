import { styled } from "styled-components";

interface IProps {
  variant: "normal" | "success" | "error";
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  &:focus-within label,
  .filled {
    color: ${({ theme }) => theme.COLORS["neutral-medium-02"]};
    font-size: ${({ theme }) => theme.FONTSIZE.nano};
    transform: translate(0, 6px) scale(0.8);
  }

  label {
    color: ${({ theme }) => theme.COLORS["neutral-medium-02"]};
    font-size: ${({ theme }) => theme.FONTWEIGHT.regular};
    line-height: ${({ theme }) => theme.LINEHEIGHT.medium};
    left: ${({ theme }) => theme.SPACING.xxs};
    pointer-events: none;
    position: absolute;
    transform: translate(0, 1.5rem) scale(1);
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &.disabled-label {
      color: ${({ theme }) => theme.COLORS["neutral-medium-04"]};
    }
  }

  input {
    background-color: ${({ theme }) => theme.COLORS["neutral-lightest"]};
    border: ${({ theme }) =>
      `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["neutral-medium-04"]}`};
    border-radius: ${({ theme }) => theme.BORDERRADIUS.sm};
    color: ${({ theme }) => theme.COLORS["neutral-dark"]};
    font-size: ${({ theme }) => theme.FONTSIZE.xs};
    height: 4rem;
    line-height: ${({ theme }) => theme.LINEHEIGHT.medium};
    outline: none;
    padding: ${({ theme }) => `${theme.SPACING.xxs}`};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &:focus {
      border: ${({ variant, theme }) =>
        variant === "normal"
          ? `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["action-medium"]}`
          : variant === "success"
          ? `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["alert-success"]}`
          : `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["alert-error"]}`};
      padding: ${({ theme }) => `${theme.SPACING.nano} ${theme.SPACING.xxs}`};
    }
  }
`;
