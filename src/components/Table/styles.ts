import styled, { css } from 'styled-components';

import {
  getColorAction,
  getColorNeutral,
  getColorAlert,
  getFontFamily,
  getWeight,
  getSize,
  getLineHeight,
  getSpacing,
  getSquish,
  getStroke,
  getRadius
} from '../../styles/getters';

interface TableWrapperProps {
  $arrIsEmpty: boolean;
}

export const Table = styled.table`
  border: 1px solid transparent;
  border-collapse: collapse;
  border-spacing: ${(props) => getSpacing('micro', props)};
  margin: 0;
  padding: ${(props) => getSpacing('xs', props)};
  /* width: 100%; */
  max-width: 1024px;
  table-layout: fixed;
`;

export const Caption = styled.caption`
  font-size: ${(props) => getSize('sm', props)};
  margin: ${(props) =>
    getSpacing('xs', props) + ' 0 ' + getSpacing('sm', props)};

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const TableRow = styled.tr`
  background-color: ${(props) => getColorNeutral('lightest', props)};
  /* border: 1px solid #ddd; */
  /* padding: 0.35em; */
`;

export const TableHeader = styled.th`
  min-width: 8.4rem;
  padding-bottom: ${(props) => getSpacing('micro', props)};
  text-align: left;
  font-size: ${(props) => getSize('base', props)};
  font-weight: ${(props) => getWeight('bold', props)};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => getColorNeutral('medium-02', props)};
  border-bottom: ${(props) =>
    getStroke('100', props) + ' ' + getColorNeutral('medium-01', props)};

  padding-right: ${(props) => getSpacing('micro', props)};

  &:first-child {
    padding-left: ${(props) => getSpacing('micro', props)};
  }
`;

export const TableCell = styled.td`
  padding: 0;
  /* padding: 0.625em; */
  text-align: left;
  min-width: 8.4rem;

  font-size: ${(props) => getSize('base', props)};
  color: ${(props) => getColorNeutral('medium-01', props)};
  border-bottom: ${(props) =>
    getStroke('100', props) + ' ' + getColorNeutral('medium-04', props)};
  padding-right: ${(props) => getSpacing('micro', props)};
  padding-top: ${(props) => getSpacing('xxs', props)};
  padding-bottom: ${(props) => getSpacing('xxxs', props)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:first-child {
    padding-left: ${(props) => getSpacing('micro', props)};
  }
`;

export const TableWrapper = styled.div<TableWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: ${(props) =>
    getStroke('100', props) + getColorNeutral('medium-02', props)};
  padding: ${(props) =>
    getSpacing('xs', props) + //top
    ' ' +
    getSpacing('xs', props) + //right
    ' ' +
    getSpacing('xxs', props) + //bottom
    ' ' +
    getSpacing('xs', props)}; //left
  border-radius: ${(props) => getRadius('300', props)};
  font-family: ${(props) => getFontFamily('default', props)};
  width: fit-content;
  background-color: ${(props) => getColorNeutral('lightest', props)};

  @media screen and (max-width: 800px) {
    padding: ${(props) =>
      0 + //top
      ' ' +
      getSpacing('xs', props) + //right
      ' ' +
      getSpacing('xs', props) + //bottom
      ' ' +
      getSpacing('xs', props)}; //left

    ${Caption} {
      font-size: ${(props) => getSize('xs', props)};
    }

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    ${TableRow} {
      border-bottom: ${(props) =>
        getStroke('100', props) + ' ' + getColorNeutral('medium-04', props)};
      display: flex;
      flex-direction: column;
      gap: ${(props) => getSpacing('xxs', props)};
      /* margin: ${(props) => getSpacing('xs', props) + ' 0'}; */
      /* margin-bottom: 0.625em; */
    }

    ${TableCell} {
      border-bottom: 0;
      display: flex;
      flex-direction: column;
      gap: ${(props) => getSpacing('nano', props)};
      text-align: left;
      padding: ${(props) => '0 ' + getSpacing('nano', props)};
      max-width: 15rem;
    }

    ${TableCell}::before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      color: ${(props) => getColorNeutral('medium-02', props)};
      letter-spacing: 0.1em;
      font-weight: ${(props) => getWeight('bold', props)};
    }

    ${TableCell}:first-child {
      margin-top: ${(props) => getSpacing('xs', props)};
    }

    ${TableCell}:last-child {
      margin-bottom: ${(props) => getSpacing('xs', props)};
      border-bottom: ${(props) =>
        getStroke('100', props) + ' ' + getColorNeutral('medium-04', props)};
    }

    ${TableCell}:last-child {
      border-bottom: 0;
    }
  }

  ${(props) =>
    props.$arrIsEmpty &&
    css`
      &::after {
        content: attr(data-message);
        font-family: ${(props) => getFontFamily('default', props)};
        font-size: ${(props) => getSize('base', props)};
        color: ${(props) => getColorNeutral('medium-02', props)};
        padding: ${(props) =>
          getSpacing('xs', props) + //top
          ' ' +
          getSpacing('xs', props) + //right
          ' ' +
          getSpacing('xxxs', props) + //bottom
          ' ' +
          getSpacing('xs', props)}; //left

        @media screen and (max-width: 800px) {
          padding: ${(props) => getSpacing('xxs', props)};
        }
      }
    `};
`;
