import { InputHTMLAttributes, useState } from 'react';
import { ErrorMessage } from '../ErrorMessage';
import * as S from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onFilterChange: (value: string) => void;
  valid: boolean;
}

export const Input = ({
  label,
  onFilterChange,
  valid,
  ...rest
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const [hasTyped, setHasTyped] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!inputText) {
      setFocused(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    onFilterChange(event.target.value);
    setHasTyped(true);
  };

  return (
    <S.InputWrapper>
      {valid ? (
        <S.InputContainer>
          <S.InputField
            type="email"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
            $valid={valid}
            $focused={focused}
            $hasTyped={hasTyped}
            {...rest}
          />
          <S.Label className={focused || inputText ? 'active' : ''}>
            {label}
          </S.Label>
        </S.InputContainer>
      ) : (
        <>
          <S.InputContainer>
            <S.InputField
              type="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleInputChange}
              $valid={valid}
              $focused={focused}
              $hasTyped={hasTyped}
              {...rest}
            />
            <S.Label className={focused || inputText ? 'active' : ''}>
              {label}
            </S.Label>
          </S.InputContainer>
          <ErrorMessage>E-mail não encontrado</ErrorMessage>
        </>
      )}
    </S.InputWrapper>
  );
};
