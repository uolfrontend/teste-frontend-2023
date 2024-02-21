import { styled } from 'styled-components';

export const SpamErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.alert.colorAlertError};
  font-size: ${({ theme }) => theme.fonts.size.nano};
`;
