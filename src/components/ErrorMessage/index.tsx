import * as S from './styled';

interface ErrorMessageProps {
  children: React.ReactNode;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <S.SpamErrorMessage>{children}</S.SpamErrorMessage>;
};
