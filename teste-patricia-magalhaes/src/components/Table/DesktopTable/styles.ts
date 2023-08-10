import styled from "styled-components";

export const Table = styled.table`
  thead {
    tr {
      th {
        border-bottom: ${({ theme }) =>
          `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["neutral-medium-04"]}`};
        color: ${({ theme }) => theme.COLORS["neutral-medium-02"]};
        padding: ${({ theme }) =>
          ` 0 ${theme.SPACING.nano} ${theme.SPACING.micro}`};
      }
    }
  }

  tbody {
    tr {
      td {
        border-bottom: ${({ theme }) =>
          `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["neutral-light"]}`};
        color: ${({ theme }) => theme.COLORS["neutral-medium-01"]};
        padding: ${({ theme }) => `${theme.SPACING.xxs} ${theme.SPACING.nano}`};
        position: relative;

        &:last-child {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
  }
`;

export const Dot = styled.span`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  display: inline-block;
`;

export const DotGreen = styled(Dot)`
  background-color: ${({ theme }) => theme.COLORS["alert-success-dark-theme"]};
`;

export const DotRed = styled(Dot)`
  background-color: ${({ theme }) => theme.COLORS["alert-error-dark-theme"]};
`;

export const DotYellow = styled(Dot)`
  background-color: ${({ theme }) =>
    theme.COLORS["alert-attention-dark-theme"]};
`;

export const DotGrey = styled(Dot)`
  background-color: ${({ theme }) => theme.COLORS["neutral-light"]};
`;
