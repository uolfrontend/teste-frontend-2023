import styled from "styled-components";

interface IProps {
  disabled: boolean;
  variant: "primary" | "secondary";
  size: "lg" | "md" | "sm";
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    background-color: ${({ disabled, theme, variant }) =>
      disabled
        ? theme.COLORS["action-lightest"]
        : variant === "primary"
        ? theme.COLORS["action-medium"]
        : "transparent"};
    border: ${({ theme, variant }) =>
      variant === "secondary"
        ? `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["action-medium"]}`
        : "none"};
    border-radius: ${({ theme }) => theme.BORDERRADIUS.md};
    color: ${({ theme, variant }) =>
      variant === "secondary"
        ? theme.COLORS["action-medium"]
        : theme.COLORS["neutral-lightest"]};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    font-weight: ${({ theme }) => theme.FONTWEIGHT.regular};
    font-size: ${({ theme, size }) =>
      size === "lg"
        ? theme.FONTSIZE.sm
        : size === "md"
        ? theme.FONTSIZE.xs
        : theme.FONTSIZE.base};
    line-height: ${({ theme }) => theme.LINEHEIGHT.tightest};
    padding: ${({ theme, size }) =>
      size === "lg"
        ? theme.SPACINGSQUISH.lg
        : size === "md"
        ? theme.SPACINGSQUISH.md
        : theme.SPACINGSQUISH.sm};
    width: max-content;

    &:hover {
      background-color: ${({ disabled, theme, variant }) =>
        disabled
          ? theme.COLORS["action-lightest"]
          : variant === "secondary"
          ? theme.COLORS["action-medium"]
          : theme.COLORS["action-light"]};
      color: ${({ theme, variant }) =>
        variant === "secondary"
          ? theme.COLORS["neutral-light"]
          : theme.COLORS["neutral-lightest"]};
    }

    &:active {
      background-color: ${({ disabled, theme }) =>
        disabled
          ? theme.COLORS["action-lightest"]
          : theme.COLORS["action-dark"]};
    }
  }
`;
