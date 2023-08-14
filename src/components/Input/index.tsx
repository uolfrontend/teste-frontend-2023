import React, {
  useState,
  Dispatch,
  SetStateAction,
  InputHTMLAttributes
} from 'react';

import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputValue?: string;
  setInputValue?: Dispatch<SetStateAction<any>>;
  queryStatus?: 'default' | 'info' | 'success' | 'attention' | 'error';
  label?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  setInputValue,
  inputValue = '',
  queryStatus = 'default',
  label,
  disabled = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: any) => {
    setInputValue && setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <S.InputContainer
      $isActive={isFocused || inputValue.length > 0}
      $queryStatus={queryStatus}
      disabled={disabled}
      $inputValue={inputValue}
    >
      <S.Label
        className="label"
        htmlFor="finput"
        $isActive={isFocused || inputValue.length > 0}
      >
        <S.Text disabled={disabled}>{label ? label : 'Label do input'}</S.Text>
      </S.Label>
      <S.InputElement
        {...props}
        data-testid="input-element"
        type="text"
        id="finput"
        name="finput"
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e);
        }}
        aria-labelledby="label-finput"
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
    </S.InputContainer>
  );
};

function arePropsEqual(prevProps: InputProps, nextProps: InputProps) {
  return (
    prevProps.inputValue === nextProps.inputValue &&
    prevProps.queryStatus === nextProps.queryStatus &&
    prevProps.label === nextProps.label &&
    prevProps.disabled === nextProps.disabled
  );
}

export default React.memo(Input, arePropsEqual);
