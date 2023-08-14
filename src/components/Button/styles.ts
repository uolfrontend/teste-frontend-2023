import styled from 'styled-components';

import {
  getColorAction,
  getColorNeutral,
  getWeight,
  getSize,
  getLineHeight,
  getSquish,
  getStroke,
  getRadius,
  getFontFamily
} from '../../styles/getters';

interface Props {
  $buttonType: string;
  $buttonSize: string;
}

export const ButtonBody = styled.button<Props>`
  //Atributos definidos pelo tipo primário ou secundário do componente
  border: ${(props) => {
    if (props.$buttonType === 'primary')
      return `${getStroke('100', props)} ${getColorNeutral(
        'transparent',
        props
      )}`;
    if (props.$buttonType === 'secondary')
      return `${getStroke('100', props)} ${getColorAction('medium', props)}`;
    return `${getStroke('100', props)} ${getColorNeutral(
      'transparent',
      props
    )}`; // border default
  }};

  background-color: ${(props) => {
    if (props.$buttonType === 'primary') return getColorAction('medium', props);
    if (props.$buttonType === 'secondary')
      return getColorNeutral('transparent', props);
    return getColorAction('medium', props); // background-color default
  }};

  color: ${(props) => {
    if (props.$buttonType === 'primary')
      return getColorNeutral('lightest', props);
    if (props.$buttonType === 'secondary')
      return getColorAction('medium', props);
    return getColorNeutral('lightest', props); // color default
  }};

  //Atributos definidos pelo tipo esperado do componente
  padding: ${(props) => {
    if (props.$buttonSize === 'small') return getSquish('micro', props);
    if (props.$buttonSize === 'medium') return getSquish('sm', props);
    if (props.$buttonSize === 'large') return getSquish('md', props);
    return getSquish('sm', props); // padding default
  }};

  font-size: ${(props) => {
    if (props.$buttonSize === 'small') return getSize('base', props);
    if (props.$buttonSize === 'medium') return getSize('xs', props);
    if (props.$buttonSize === 'large') return getSize('sm', props);
    return getSize('xs', props); // font-size default
  }};

  border-radius: ${(props) => getRadius('300', props)};
  font-family: ${(props) => getFontFamily('default', props)};
  font-weight: ${(props) => getWeight('regular', props)};
  line-height: ${(props) => getLineHeight('tightest', props)};
  outline: none;
  position: relative;
  overflow: hidden;
  transition: background 0.8s;
  cursor: pointer;

  &:hover {
    background: ${(props) => {
      if (props.$buttonType === 'primary') return getColorAction('light', props);
      if (props.$buttonType === 'secondary')
        return getColorAction('medium', props);
      return getColorAction('light', props); // border default
    }};

    color: ${(props) => {
      if (props.$buttonType === 'primary')
        return getColorNeutral('lightest', props);
      if (props.$buttonType === 'secondary' && props.disabled)
        return getColorNeutral('lightest', props);
      return getColorNeutral('lightest', props); // color default
    }};

    transition: background 0.2s;
  }

  &:active {
    background-color: ${(props) => getColorAction('dark', props)};
    background-size: 100%;
    transition: background 0s;
  }

  &::first-letter {
    text-transform: capitalize;
  }

  &:disabled {
    color: ${(props) => getColorNeutral('lightest', props)};
    background-color: ${(props) => getColorAction('lightest', props)};
    border: ${(props) =>
      `${getStroke('100', props)} ${getColorNeutral('transparent', props)}`};
    cursor: not-allowed;

    /* &:hover {
      color: ${(props) => {
      if (props.$buttonType === 'secondary')
        return getColorAction('medium', props);
    }};
    } */
  }
`;
