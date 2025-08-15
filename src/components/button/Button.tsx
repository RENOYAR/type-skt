// @ts-nocheck
import React, {ReactNode, useState, MouseEventHandler} from 'react';
import {ButtonStyle, ButtonIcon} from './StyledButton';

interface ButtonProps {
  id?: string;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  $size?: 'small' | 'medium' | 'large';
  $variant?: 'primary' | 'secondary' | 'tertiary';
  $icon?: string; // icon 파일명
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
  $size,
  $variant,
  $icon,
  isSelected,
  $iconOnly,
  $width,
  $minWidth,
  $toggle,
  $toggleDefault = false,
  $marginLeft,
}: ButtonProps) {
  const [toggle, setToggle] = useState($toggleDefault);

  const handleToggleClick = () => {
    setToggle(!toggle);
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
      className={className}
      $size={$size}
      $variant={$variant}
      $icon={$icon}
      $width={$width}
      $minWidth={$minWidth}
      $marginLeft={$marginLeft}
      isSelected={isSelected}>
      {children}
    </ButtonStyle>
  );
}
