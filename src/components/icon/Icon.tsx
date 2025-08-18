import {ReactNode} from 'react';
import {IconStyle} from './StyledIcon';

interface IconProps {
  $name: string;
  $widthSize: number;
  $heightSize: number;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Icon({
  $name,
  $widthSize,
  $heightSize,
  children,
  onClick,
  className,
}: IconProps) {
  return (
    <IconStyle
      className={`icon ${className || ''}`}
      $name={$name}
      $widthSize={$widthSize}
      $heightSize={$heightSize}
      onClick={onClick}>
      {children && <span className="blind-text">{children}</span>}
    </IconStyle>
  );
}
