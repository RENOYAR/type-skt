import {ReactNode} from 'react';
import {RadioboxWrapper, StyledRadio, StyledRadioBoxText} from './StyledRadio';

interface RadioProps {
  id?: string;
  name?: string;
  text?: ReactNode;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  className?: string;
  $large?: boolean;
}

export default function Radio({
  id,
  name,
  text,
  disabled,
  checked,
  defaultChecked,
  className,
  $large = false,
}: RadioProps) {
  return (
    <RadioboxWrapper>
      <StyledRadio
        type="radio"
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        className={className}
        $large={$large}
      />
      <label htmlFor={id}>
        {text && (
          <StyledRadioBoxText $disabled={disabled}>{text}</StyledRadioBoxText>
        )}
      </label>
    </RadioboxWrapper>
  );
}
