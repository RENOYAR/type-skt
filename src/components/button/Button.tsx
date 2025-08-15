import React, {ReactNode, useState, MouseEventHandler} from 'react';
import {ButtonStyle, ButtonIcon} from './StyledButton';

interface ButtonProps {
  id?: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  $icon?: string;
  isSelected?: boolean;
  $iconOnly?: boolean;
  $width?: string | number;
  $minWidth?: string | number;
  $toggle?: boolean;
  $toggleDefault?: boolean;
  $marginLeft?: string | number;
}

export default function Button({
  id,
  children,
  disabled,
  className,
  onClick,
  onMouseDown,
  $icon,
  $iconOnly,
  $toggle,
  $toggleDefault = false,
}: ButtonProps) {
  const [toggle, setToggle] = useState($toggleDefault);

  const handleToggleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setToggle(prev => !prev);
  };

  return $iconOnly ? (
    <ButtonIcon
      className={className}
      onClick={$toggle ? handleToggleClick : onClick}
      onMouseDown={onMouseDown}>
      <img
        src={`/images/icons/${
          $toggle ? (toggle ? `${$icon}-active` : $icon) : $icon
        }.svg`}
        alt="icon"
      />
    </ButtonIcon>
  ) : (
    <ButtonStyle
      id={id}
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      className={className}>
      {children}
    </ButtonStyle>
  );
}
