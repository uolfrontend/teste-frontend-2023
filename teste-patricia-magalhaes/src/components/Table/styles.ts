import styled from "styled-components";

export const Container = styled.div`
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

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

