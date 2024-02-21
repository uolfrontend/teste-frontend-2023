import { styled } from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.colorNeutralLightest};
  border: ${({ theme }) => theme.linesEdges.stroke100}
    ${({ theme }) => theme.colors.neutral.colorNeutraMedium04};
  border-radius: ${({ theme }) => theme.linesEdges.radius300};
  padding: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xxs};
  overflow-x: auto;
  @media (max-width: 672px) {
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TableContent = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.colorNeutralLightest};

  th {
    color: ${({ theme }) => theme.colors.neutral.colorNeutraMedium02};
    text-transform: uppercase;
  }

  tr {
    color: ${({ theme }) => theme.colors.neutral.colorNeutraMedium01};
  }

  td,
  th {
    text-align: start;
    padding: ${({ theme }) => theme.spacing.xxs}
      ${({ theme }) => theme.spacing.micro};
    border-bottom: ${({ theme }) => theme.linesEdges.stroke100}
      ${({ theme }) => theme.colors.neutral.colorNeutralLight};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 11.125rem;
  }

  @media (max-width: 672px) {
    th,
    td {
      padding: ${({ theme }) => theme.spacing.nano}
        ${({ theme }) => theme.spacing.micro};
    }
  }
`;
