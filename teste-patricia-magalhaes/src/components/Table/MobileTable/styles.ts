import styled from "styled-components";

export const Table = styled.table`
  tr {
    display: flex;
    flex-direction: column;

    th {
      display: flex;
      color: ${({ theme }) => theme.COLORS["neutral-medium-02"]};
      padding: ${({ theme }) =>
        `${theme.SPACING.xxs} ${theme.SPACING.micro} ${theme.SPACING.nano} `};
    }

    td {
      border: none;
      color: ${({ theme }) => theme.COLORS["neutral-medium-01"]};
      padding: ${({ theme }) =>
        `0 ${theme.SPACING.micro} ${theme.SPACING.xxs} `};
      position: relative;
    }

    td:nth-of-type(5n) {
      border-bottom: ${({ theme }) =>
        `${theme.BORDERWIDTH.xs} solid ${theme.COLORS["neutral-medium-04"]}`};
    }
  }
`;