// @ts-nocheck
import ReactSelect from 'react-select';
import styled, {css} from 'styled-components';

export const SelectStyle = styled(ReactSelect)`
  .react-select__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props => (props.$transparent ? '0 0 0 8px' : '5px 9px')};
    min-height: ${props => (props.$height ? props.$height + 'px' : '32px')};
    height: ${props => (props.$height ? props.$height + 'px' : '32px')};
    width: auto;
    border-radius: 4px;
    border: ${props =>
      props.disabled
        ? '1px solid #dadce4'
        : props.readonly
        ? '1px solid #dadce4'
        : props.$error
        ? '1px solid #DB3232'
        : props.$transparent
        ? 'transparent'
        : '1px solid #c2c5d2'};
    color: ${props =>
      props.isDisabled ? '#cdcdcd' : props.readonly ? '#A0A4B6' : '#434860'};
    background-color: ${props =>
      props.isDisabled
        ? '#f9f9f9'
        : props.readonly
        ? '#F9F9F9'
        : props.$transparent
        ? 'transparent'
        : '#fff'};
    box-shadow: none;
    // margin: 0 0 8px 0;
  }
  .react-select__control--is-focused {
    border-color: #5755ff !important;
  }
  .react-select__control .react-select__value-container {
    padding: 0;
  }
  .react-select__placeholder {
    margin-left: 0;
    margin-right: 4px;
    font-size: 14px;
    line-height: 20px;
    color: ${props =>
      props.isDisabled ? '#cdcdcd' : props.readonly ? '#A0A4B6' : '#A0A4B6'};
  }
  .react-select__single-value {
    margin: 0;
    margin-right: 4px;
    font-size: 14px;
    line-height: 20px;
    color: ${props =>
      props.isDisabled
        ? '#cdcdcd'
        : props.readonly
        ? '#A0A4B6'
        : props.$transparent
        ? '#455DD7'
        : '#434860'};
    font-weight: ${props => (props.$transparent ? '500' : '400')};
    text-align: left;
  }
  .react-select__input-container {
    display: flex;
    margin: 0;
    padding: 0;
    height: 20px;
  }
  .react-select__indicators {
    /* display: block; */
    width: 20px;
    height: 20px;
  }
  .react-select__indicator {
    padding: 0;
    width: 20px;
    height: 20px;
    opacity: ${props =>
      props.isDisabled ? '0.5' : props.readonly ? '0.5' : '1'};

    svg {
      display: none;
    }
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select--is-focused {
    border: 1px solid red;
  }
  .react-select__menu {
    font-size: 14px;
    box-shadow: 0 6px 10px #0000000d;
    border: 1px solid #caccd7;
    padding: 8px;
    margin: 4px 0;
    width: 100%;
    min-width: 160px;
    z-index: 20;
  }
  .w-136.react-select__menu {
    min-width: 136px !important;
  }
  .react-select__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 36px;
    padding: 8px 6px 8px 9px;
    border-radius: 4px;
    z-index: 300;

    label {
      flex: 1;
      font-size: 14px;
      border-radius: 6px;
      line-height: 36px;
      color: #434860;
      font-weight: 400;
      padding-left: 9px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    label[for='checkbox-*'] {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .react-select__option--is-focused {
    background-color: #f8f9fb;
  }
  .react-select__option--is-selected {
    background-color: transparent !important;
    font-weight: 500;
    color: #455dd7;
  }
  .react-select__multi-value {
    border-radius: 0;
    margin: 0;
    background-color: transparent;
    position: relative;
    + .react-select__multi-value {
      padding-left: 6px;

      &::after {
        content: ',';
        font-size: 14px;
        position: absolute;
        bottom: 2px;
        left: 0;
      }
    }
  }
  .react-select__value-container.react-select__value-container--is-multi.react-select__value-container--has-value {
    flex-wrap: unset !important;
    -webkit-flex-wrap: unset !important;
  }
  .react-select__multi-value__label {
    background-color: transparent;
    color: ${props =>
      props.isDisabled
        ? '#cdcdcd'
        : props.readonly
        ? '#A0A4B6'
        : props.$transparent
        ? '#455DD7'
        : '#434860'};
    font-size: 14px;
    font-weight: ${props => (props.$transparent ? '500' : '400')};
    line-height: 20px;
    padding: 0;
  }
  .react-select__multi-value__remove {
    display: none;
  }
  .select-all-input {
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      margin: 0;
    }
  }
`;

export const CheckBox = styled.input`
  display: ${props => (props.$checkbox ? 'block' : 'none')};
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;

  &:checked {
    width: 18px;
    height: 18px;
    border: none;
    background-size: contain;
    background: url('/images/icons/icon-check.svg') no-repeat;
  }
`;

export const MenuBox = styled.div`
  box-shadow: 0 6px 10px #0000000d;
  border: 1px solid #caccd7;
  padding: 8px;
  width: 100%;
  min-width: 160px;
  position: absolute;
  z-index: 10;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 4px;
`;

export const MenuFooter = styled.div`
  padding-top: 10px;
  display: ${props => (props.$button ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f0f1f4;

  button {
    padding: 0 12px;
    height: 24px;
  }
`;

export const SelectInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 32px;
  padding: 6px 8px;
  border-radius: 4px;
  border: ${props =>
    props.$transparent ? '1px solid transparent' : '1px solid #c2c5d2 '};
`;

export const SelectText = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-right: 4px;
  color: ${props => (props.$textValue ? '#455DD7' : '#434860')};
  font-weight: ${props => (props.$textValue ? '500' : '400')};
`;

export const ArrowButton = styled.div`
  width: 20px;
  height: 20px;
  ${props => {
    if (props.$isOpen) {
      return css`
        background-image: url('/images/icons/icon-select-arrow-active.svg');
      `;
    } else {
      return css`
        background-image: url('/images/icons/icon-select-arrow.svg');
      `;
    }
  }}
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(0deg);
  transition: transform 0.3s ease;
  transform-origin: center;

  &:focus {
    transform: rotate(180deg);
  }
`;

export const Icon = styled.div`
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 1;
`;

export const DropdownIndicatorSvg = styled.div`
  height: 24px;
  width: 32px;
`;
export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  color: #db3232;
  font-size: ${props => props.theme.fontSize.fontSize1};
  font-weight: 500;
  line-height: 20px;
  margin-top: 2px;
  padding-left: 4px;
  white-space: nowrap;
`;

export const VerifiedMessage = styled.div`
  display: flex;
  align-items: center;
  color: #009b6d;
  font-size: ${props => props.theme.fontSize.fontSize1};
  font-weight: 500;
  line-height: 20px;
  margin-top: 2px;
  padding-left: 4px;
  white-space: nowrap;
`;

export const InnerRight = styled.span`
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);
  font-size: ${props => props.theme.fontSize.fontSize3};
  font-weight: 400;
  color: ${props =>
    props.readOnly ? '#a0a4b6' : props.value ? '#434860' : '#a0a4b6'};
`;
