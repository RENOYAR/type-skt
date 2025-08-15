// @ts-nocheck
import {IconStyle} from './StyledIcon';

export default function Icon({
  $name,
  $widthSize,
  $heightSize,
  children,
  onClick,
  className,
}) {
  return (
    <IconStyle
      className={`icon ${className || ''}`}
      $name={$name && $name}
      $widthSize={$widthSize}
      $heightSize={$heightSize}
      onClick={onClick}>
      {children && <span className="blind-text">{children}</span>}
    </IconStyle>
  );
}
