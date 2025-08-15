// @ts-nocheck
import React from 'react';

import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  thead th {
    font-weight: 500;
    font-size: ${props => props.theme.fontSize.fontSize2};
    border-top: 2px solid #ddd;
    background-color: #eee;
    padding: 8px 14px;
  }
  tr {
    &:has(a):hover {
      background-color: #fff;
    }
  }
  th,
  td {
    border: 1px solid #ddd;
    color: #000;
    text-align: center;
    box-sizing: border-box;
  }
  td {
    font-size: ${props => props.theme.fontSize.fontSize1};
    padding: 8px;
    word-break: keep-all;
    a {
      display: block;
      white-space: pre-wrap;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .badge {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    color: #fff;
    font-size: 11px;
    border-radius: 0.4rem;
    &.complete {
      background-color: ${props => props.theme.color.green};
    }
    &.ing {
      background-color: ${props => props.theme.color.blue};
    }
    &.modify {
      background-color: ${props => props.theme.color.orange};
    }
    &.confirm {
      background-color: ${props => props.theme.color.yellow};
    }
  }
  li {
    text-align: center;
    + li {
      margin-top: 0.5rem;
    }
    &.highlight {
      color: red;
      font-weight: 700;
    }
  }
`;

export default function GuideTable({children}) {
  return <StyledTable>{children}</StyledTable>;
}
