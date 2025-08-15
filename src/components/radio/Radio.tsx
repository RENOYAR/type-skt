// @ts-nocheck
import {RadioboxWrapper, StyledRadio, StyledRadioBoxText} from './StyledRadio';

export default function Radio({
  id,
  name,
  text,
  htmlFor,
  disabled,
  checked,
  className,
  defaultChecked,
  $large = false,
}) {
  return (
    <>
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
            <StyledRadioBoxText disabled={disabled}>{text}</StyledRadioBoxText>
          )}
        </label>
      </RadioboxWrapper>
    </>
  );
}
