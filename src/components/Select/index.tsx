import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  Dispatch,
  SetStateAction
} from 'react';

import * as S from './styles';

import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';

export type SelectProps = {
  queryType?: string;
  setQueryType?: Dispatch<SetStateAction<any>>;
  label?: string;
  disabled?: boolean;
  options: Array<string>;
};

const Select: React.FC<SelectProps> = ({
  queryType,
  setQueryType,
  label,
  disabled = false,
  options = ['default option']
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsFocused);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClick = () => {
    setIsFocused(true);
  };

  const handleSelectOption = (value: string) => {
    setQueryType && setQueryType(value);
  };

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }
    setIsFocused(!isFocused);
  }, [queryType]);

  return (
    <S.SelectContainer
      disabled={disabled}
      onClick={() => handleClick()}
      ref={wrapperRef}
      $isActive={isFocused || queryType?.length ? true : false}
    >
      <S.Label
        className="label"
        htmlFor="finput"
        $isActive={isFocused || queryType?.length ? true : false}
      >
        <S.Text disabled={disabled}>{label ? label : 'Label do select'}</S.Text>
      </S.Label>
      <S.SelectElement
        tabIndex={4}
        aria-labelledby="label-finput"
        onFocus={handleFocus}
      >
        {queryType ?? ''}
        <S.DownArrowContainer $isActive={isFocused}>{'▼'}</S.DownArrowContainer>
      </S.SelectElement>
      <S.SelectOptions $isActive={isFocused}>
        {options.map((option, index) => (
          <S.Option
            key={`option-${option}-${index}`}
            onClick={(e) => {
              handleSelectOption(option);
            }}
          >
            <S.OptionText key={`option-text-${option}-${index}`}>
              {option}
            </S.OptionText>
          </S.Option>
        ))}
      </S.SelectOptions>
    </S.SelectContainer>
  );
};

function arePropsEqual(prevProps: SelectProps, nextProps: SelectProps) {
  return (
    prevProps.queryType === nextProps.queryType &&
    prevProps.label === nextProps.label &&
    prevProps.options === nextProps.options &&
    prevProps.disabled === nextProps.disabled
  );
}

export default React.memo(Select, arePropsEqual);
