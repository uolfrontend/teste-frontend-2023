import styled from 'styled-components'

export const Table = styled.table`
  background-color: ${({ theme }) => theme.color.neutral.lightest};
  border-width: ${({ theme }) => theme.lines.stroke100};
  border-style: solid;
  border-color: ${({ theme }) => theme.color.neutral.medium04};
  border-radius: ${({ theme }) => theme.edges.radius300};
  background-color: ${({ theme }) => theme.color.neutral.lightest};
  border-spacing: 0;
  width: 100%;
  max-width: 800px;
  padding: 0 ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xxs};

  th {
    padding: 0 ${({ theme }) => theme.spacing.micro};
    padding-top: ${({ theme }) => theme.spacing.xs};
    padding-bottom: ${({ theme }) => theme.spacing.micro};
    text-align: start;
    color: ${({ theme }) => theme.color.neutral.medium02};
    border-bottom: 1px solid ${({ theme }) => theme.color.neutral.medium04};
  }

  td {
    padding-block: ${({ theme }) => theme.spacing.xxxs};
    padding-inline: ${({ theme }) => theme.spacing.micro};
    color: ${({ theme }) => theme.color.neutral.medium01};
    border-bottom: 1px solid ${({ theme }) => theme.color.neutral.light};
  }

  .mobile-table {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile-table {
      display: initial;
    }

    .desktop-table {
      display: none;
    }

    tr {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid ${({ theme }) => theme.color.neutral.medium04};
      padding-block: ${({ theme }) => theme.spacing.xs};
    }

    th {
      border-bottom: 0;
      padding-block: 0;
      padding-bottom: ${({ theme }) => theme.spacing.nano};
    }

    td {
      border-bottom: 0;
      padding-block: 0;
      padding-bottom: ${({ theme }) => theme.spacing.xxs};
    }

    td:last-of-type {
      padding-block: 0;
    }
  }
`
