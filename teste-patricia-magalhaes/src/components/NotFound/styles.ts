import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  h2 {
    color: ${({ theme }) => theme.COLORS["neutral-medium-01"]};
    font-weight: ${({ theme }) => theme.FONTWEIGHT.medium};
  }

  p {
    color: ${({ theme }) => theme.COLORS["neutral-medium-01"]};
    font-weight: ${({ theme }) => theme.FONTWEIGHT.light};
  }
`;
