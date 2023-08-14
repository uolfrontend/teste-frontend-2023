import styled, { css } from 'styled-components';

import {
  getColorAction,
  getColorNeutral,
  getColorAlert,
  getWeight,
  getSize,
  getLineHeight,
  getSquish,
  getStroke,
  getRadius,
  getFontFamily,
  getSpacing
} from '../../styles/getters';

interface InputContainerProps {
  $isActive: boolean;
  $queryStatus: 'default' | 'info' | 'success' | 'attention' | 'error' | string;
  disabled: boolean;
  $inputValue: string;
}

interface LabelProps {
  $isActive: boolean;
}

interface TextProps {
  disabled: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: 280px;
  height: 50px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  border: ${(props) => {
    if (
      props.$queryStatus === 'default' ||
      props.$queryStatus === 'info' ||
      !props.$inputValue.length ||
      props.disabled
    )
      return `${getStroke('100', props)} ${getColorNeutral(
        'medium-04',
        props
      )}`;
    if (props.$queryStatus === 'success')
      return `${getStroke('100', props)} ${getColorAlert('success', props)}`;
    if (props.$queryStatus === 'attention')
      return `${getStroke('100', props)} ${getColorAlert('attention', props)}`;
    if (props.$queryStatus === 'error')
      return `${getStroke('100', props)} ${getColorAlert('error', props)}`;
    return `${getStroke('100', props)} ${getColorNeutral('medium-04', props)}`; // border default
  }};

  border-radius: ${(props) => getRadius('200', props)};
  box-sizing: border-box;
  padding: ${(props) =>
    `${getSpacing('xxs', props)} ${getSpacing('xxxs', props)}`};
  font-family: ${(props) => getFontFamily('default', props)};
  font-size: ${(props) => getSize('xs', props)};
  background: ${(props) => getColorNeutral('lightest', props)};

  ${(props) =>
    props.$isActive &&
    props.$queryStatus !== 'success' &&
    props.$queryStatus !== 'attention' &&
    props.$queryStatus !== 'error' &&
    css`
      border-color: ${(props) => getColorAction('medium', props)};
    `};

  ${(props) =>
    props.$isActive &&
    css`
      outline: none;
      padding: ${(props) =>
        `${getSpacing('nano', props)} ${getSpacing('xxs', props)}`};
    `};

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `};
`;

export const InputElement = styled.input`
  width: 100%;
  border: none;
  border-radius: ${(props) => getRadius('100', props)};
  box-sizing: border-box;
  font-family: ${(props) => getFontFamily('default', props)};
  font-size: 16px;
  padding: 0;
  color: ${(props) => getColorNeutral('dark', props)};
  line-height: ${(props) => getLineHeight('medium', props)};
  font-weight: ${(props) => getWeight('regular', props)};
  transition: 0.1s cubic-bezier(0.5, 0.5, 0, 1);

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${(props) => getColorNeutral('medium-04', props)};
    background: transparent;
    cursor: not-allowed;
  }
`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => `${getSpacing('xxs', props)}`};
  display: flex;
  align-items: center;
  pointer-events: none;
  transition: 0.1s cubic-bezier(0.5, 0.5, 0, 1);
  transform-origin: left top;
  background: transparent;
  font-size: ${(props) => getSize('xs', props)};
  line-height: ${(props) => getLineHeight('medium', props)};

  ${(props) =>
    props.$isActive &&
    css`
      top: -24px;
      font-size: ${(props) => getSize('nano', props)};
    `};
`;

export const Text = styled.div<TextProps>`
  transition: 0.1s cubic-bezier(0.5, 0.5, 0, 1);
  transform-origin: left top;
  color: ${(props) => getColorNeutral('medium-02', props)};

  &::first-letter {
    text-transform: capitalize;
  }

  ${(props) =>
    props.disabled &&
    css`
      color: ${(props) => getColorNeutral('medium-04', props)};
    `};
`;
