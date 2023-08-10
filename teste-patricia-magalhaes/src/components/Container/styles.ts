import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS["neutral-lightest"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: ${({ theme }) => theme.SPACING.xl};
  width: 100%;
  height: 100vh;
  background: url("https://i.ibb.co/YpB94kY/Blue-Abstract-Background-free-Vector-image.png") center;
  background-size: contain;

  header {
    h1 {
      color: ${({ theme }) => theme.COLORS["action-dark"]};
    }
  }

  @media (max-width: 768px) {
    background: none;
    height: auto;
    padding: ${({ theme }) => theme.SPACING.md};
    text-align: center;
  }
`;
