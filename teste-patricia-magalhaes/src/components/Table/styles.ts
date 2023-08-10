import styled from "styled-components";

interface IProps {
  $status?: string | undefined;
}

export const Container = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3rem;

  h2 {
    color: ${({ theme }) => theme.COLORS["action-dark"]};
  }

  table {
    background-color: ${({ theme }) => theme.COLORS["neutral-lightest"]};
    border: ${({ theme }) =>
      `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["neutral-medium-04"]}`};
    border-radius: ${({ theme }) => theme.BORDERRADIUS.md};
    padding: ${({ theme }) =>
      `${theme.SPACING.xs} ${theme.SPACING.xs} ${theme.SPACING.xxs}`};
    text-align: left;
    width: 60%;

    .only-mobile {
      display: none;
    }

    @media (max-width: 768px) {
      width: 100%;

      .only-desktop {
        display: none;
      }

      .only-mobile {
        display: flex;
      }

      tr {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const TableColumnTitle = styled.th`
  border-bottom: ${({ theme }) =>
    `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["neutral-medium-04"]}`};
  color: ${({ theme }) => theme.COLORS["neutral-medium-02"]};
  padding: ${({ theme }) => ` 0 ${theme.SPACING.nano} ${theme.SPACING.micro}`};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Cell = styled.td<IProps>`
  border-bottom: ${({ theme }) =>
    `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["neutral-light"]}`};
  color: ${({ theme }) => theme.COLORS["neutral-medium-01"]};
  padding: ${({ theme }) => `${theme.SPACING.xxs} ${theme.SPACING.nano}`};
  position: relative;

  &:before {
    content: ${({ $status }) => ($status !== "" ? "'\\2022' " : "")};
    text-align: center;
    font-size: ${({ theme }) => theme.FONTSIZE.xl};
    color: ${({ $status, theme }) =>
      $status === "active"
        ? theme.COLORS["alert-success-dark-theme"]
        : $status === "inactive"
        ? theme.COLORS["alert-error-dark-theme"]
        : $status === "waiting"
        ? theme.COLORS["alert-attention-dark-theme"]
        : $status === "disabled"
        ? theme.COLORS["neutral-light"]
        : "transparent"};
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(100%, -50%);

    @media (max-width: 768px) {
      content: "";
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => `0 ${theme.SPACING.micro} ${theme.SPACING.xxs} `};

    &:not(.border-grey) {
      border: none;
    }

    .border-grey {
      padding: 16px 0 0;
    }
  }
`;

export const MobileColumnTitle = styled.th`
  @media (max-width: 768px) {
    display: flex;
    color: ${({ theme }) => theme.COLORS["neutral-medium-02"]};
    padding: ${({ theme }) =>
      `${theme.SPACING.xxs} ${theme.SPACING.micro} ${theme.SPACING.nano} `};
    vertical-align: top;

    &:not(.only-mobile.padding-top) {
      padding: ${({ theme }) =>
        `0 ${theme.SPACING.micro} ${theme.SPACING.nano} `};
    }
  }
`;
