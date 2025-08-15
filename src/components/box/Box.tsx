import {ReactNode} from 'react';
import {BoxWrap} from './StyledBox';

interface BoxProps {
  children: ReactNode;
  $widthSize?: string;
  $padDing?: string;
  $heightSize?: string;
  $marginRight?: string;
}

export default function Box({
  children,
  $widthSize,
  $padDing,
  $heightSize,
  $marginRight,
}: BoxProps) {
  return (
    <BoxWrap
      $widthSize={$widthSize}
      $padDing={$padDing}
      $marginRight={$marginRight}
      $heightSize={$heightSize}>
      {children}
    </BoxWrap>
  );
}
