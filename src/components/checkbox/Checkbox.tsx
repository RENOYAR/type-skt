// @ts-nocheck
import {
  CheckboxWrapper,
  StyledCheckBoxText,
  StyledCheckbox,
} from './StyledCheckbox';

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
}) {
  return (
    <CheckboxWrapper>
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
          <StyledCheckBoxText disabled={disabled}>{text}</StyledCheckBoxText>
        )}
      </label>
    </CheckboxWrapper>
  );
}
