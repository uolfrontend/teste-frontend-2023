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
import { url } from 'inspector';

interface SelectContainerProps {
  $isActive: boolean;
  disabled: boolean;
}

interface LabelProps {
  $isActive: boolean;
}

interface TextProps {
  disabled: boolean;
}

interface SelectOptionsProps {
  $isActive: boolean;
}

interface DownArrowProps {
  $isActive: boolean;
}

export const SelectContainer = styled.div<SelectContainerProps>`
  position: relative;
  width: 280px;
  height: 50px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  border: ${(props) =>
    getStroke('100', props) + ' ' + getColorNeutral('medium-04', props)};

  border-radius: ${(props) => getRadius('200', props)};
  box-sizing: border-box;
  padding: ${(props) =>
    `${getSpacing('xxs', props)} ${getSpacing('xxxs', props)}`};
  font-family: ${(props) => getFontFamily('default', props)};
  font-size: ${(props) => getSize('xs', props)};
  background: ${(props) => getColorNeutral('lightest', props)};
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      outline: none;
      padding: ${(props) =>
        `${getSpacing('nano', props)} ${getSpacing('xxs', props)}`};
    `};
`;

export const SelectElement = styled.div.attrs((props) => ({
  tabIndex: 0
}))`
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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: transparent;
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

export const DownArrowContainer = styled.span<DownArrowProps>`
  position: absolute;
  right: ${(props) => getSpacing('xxxs', props)};
  bottom: ${(props) => getSpacing('micro', props)};
  transition: 0.2s ease-in-out;

  ${(props) =>
    props.$isActive &&
    css`
      transform: rotate(180deg);
    `};
`;

export const SelectOptions = styled.div<SelectOptionsProps>`
  position: absolute;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => getColorNeutral('lightest', props)};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: ${(props) => getRadius('200', props)};
  overflow: hidden;
  top: 50px;
  visibility: hidden;

  ${(props) =>
    props.$isActive &&
    css`
      visibility: visible;
    `};
`;

export const Option = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => getColorNeutral('lightest', props)};
  padding: ${(props) => getSpacing('nano', props)};

  &:hover {
    background-color: ${(props) => getColorNeutral('medium-04', props)};
  }
`;

export const OptionText = styled.span`
  padding: ${(props) => '0 ' + getSpacing('nano', props)};
`;
