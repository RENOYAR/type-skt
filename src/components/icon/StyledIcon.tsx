// @ts-nocheck
import styled, {css} from 'styled-components';

export const IconStyle = styled.div`
  display: inline-flex;
  width: ${props => props.$widthSize}px;
  height: ${props => props.$heightSize}px;
  ${props =>
    props.$name &&
    css`
      background: url('/images/icons/${props.$name}.svg') no-repeat center /
        cover;
    `}

  vertical-align: middle;

  .blind-text {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }
`;
