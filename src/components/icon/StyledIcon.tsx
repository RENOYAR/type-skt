import styled, {css} from 'styled-components';

interface IconStyleProps {
  $name?: string;
  $widthSize: number;
  $heightSize: number;
}

export const IconStyle = styled.div<IconStyleProps>`
  display: inline-flex;
  width: ${({$widthSize}) => $widthSize}px;
  height: ${({$heightSize}) => $heightSize}px;

  ${({$name}) =>
    $name &&
    css`
      background: url('/images/icons/${$name}.svg') no-repeat center / cover;
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
