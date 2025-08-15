// @ts-nocheck
import {BoxWrap} from './StyledBox';

export default function Box({
  children,
  $widthSize,
  $padDing,
  $heightSize,
  $marginRight,
}) {
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
