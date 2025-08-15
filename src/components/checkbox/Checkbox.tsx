import {ChangeEventHandler, ReactNode} from 'react';
import {
  CheckboxWrapper,
  StyledCheckBoxText,
  StyledCheckbox,
} from './StyledCheckbox';

interface CheckBoxProps {
  id?: string;
  name?: string;
  text?: ReactNode;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  widthSize?: string | number;
}

export default function CheckBox({
  id,
  name,
  text,
  disabled,
  checked,
  defaultChecked,
  className,
  onChange,
  widthSize,
}: CheckBoxProps) {
  return (
    <CheckboxWrapper style={{width: widthSize}}>
      <StyledCheckbox
        type="checkbox"
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        className={className}
        onChange={onChange}
      />
      <label htmlFor={id}>
        {text && (
          <StyledCheckBoxText $disabled={disabled}>{text}</StyledCheckBoxText>
        )}
      </label>
    </CheckboxWrapper>
  );
}
