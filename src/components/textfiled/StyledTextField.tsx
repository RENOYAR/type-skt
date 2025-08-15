// @ts-nocheck
import styled, {css} from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
  .inner-right-error {
    top: calc(50% - 11px);
  }
`;

export const InputText = styled.input`
  display: block;
  width: ${props => (props.$width ? props.$width + 'px' : '100%')};
  height: ${props => (props.$height ? props.$height + 'px' : '32px')};
  padding: 5px 9px;
  font-size: ${props => props.theme.fontSize.fontSize3};
  line-height: 20px;
  color: ${props =>
    props.disabled
      ? `${props.theme.color.textDimed}`
      : props.readOnly
      ? `${props.theme.color.gray4}`
      : `${props.theme.color.gray8}`};
  font-weight: 400;
  border: ${props =>
    props.disabled
      ? `1px solid ${props.theme.color.gray2}`
      : props.readOnly
      ? `1px solid ${props.theme.color.gray2}`
      : props.$error
      ? '1px solid #DB3232'
      : `1px solid ${props.theme.color.gray3}`};
  border-radius: 4px;
  background-color: ${props =>
    props.readOnly
      ? '#F9F9F9'
      : props.disabled
      ? '#F9F9F9'
      : `${props.theme.color.white}`};

  &::placeholder {
    color: ${props => props.theme.color.gray4};
  }

  &:hover {
    border: ${props =>
      props.$error
        ? '1px solid #DB3232'
        : props.$verified
        ? `1px solid ${props.theme.color.gray3}`
        : `1px solid ${props.theme.color.primary}`};
  }

  &:focus {
    border: 1px solid
      ${props =>
        props.$error
          ? '#DB3232'
          : props.$verified
          ? `1px solid ${props.theme.color.gray3}`
          : '#0057ff'};
    outline: none;
  }

  &:disabled {
    pointer-events: none;
  }

  &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  &::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  &:has(~ .inner-right-text),
  &:has(~ .delete-button) {
    padding-right: 24px;
  }

  &:has(~ .search-button) {
    padding-right: 30px;
  }

  &:has(~ .delete-button + .search-button) {
    padding-right: 54px;
  }

  &:has(~ .valid-check-wrap) {
    padding-right: 28px;
  }

  &:has(~ .delete-button + .valid-check-wrap) {
    padding-right: 56px;
  }

  &:has(~ .delete-button + .stepper) {
    padding-right: 38px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${props => (props.$search ? '34px' : props.$stepper ? '24px' : '9px')};
  ${props =>
    props.textValidCheck &&
    css`
      right: 28px;
    `}
  transform: translateY(-50%);
  margin-top: ${props =>
    props.$errorMessage ? '-10px' : props.$verifiedMessage ? '-10px' : '0'};
  width: 14px;
  height: 14px;
  background: url('/images/icons/icon-delete.svg') no-repeat;
`;

export const SearchButton = styled.button`
  display: ${props => (props.$search ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: ${props =>
    props.readOnly
      ? `url('/images/icons/icon-search-secondaryGray-disabled.svg')`
      : props.disabled
      ? `url('/images/icons/icon-search-secondaryGray-disabled.svg')`
      : props.$inputValue
      ? `url('/images/icons/icon-search-secondaryGray.svg')`
      : `url('/images/icons/icon-search.svg')`};
  background-repeat: no-repeat;
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

export const AutoCompleteWrap = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  width: 100%;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #caccd7;
  z-index: 200;

  &.open {
    display: block;
  }

  .auto-complete-list {
    max-height: 196px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    .auto-complete-item {
      font-size: ${props => props.theme.fontSize.fontSize3};
      font-weight: 400;
      color: ${props => props.theme.color.gray8};
      line-height: 36px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border-radius: 4px;
      padding: 0 12px;
      cursor: pointer;

      &:hover {
        background-color: #f8f9fb;
      }

      &.selected {
        color: #5755ff;
      }
    }
  }
`;

export const ValidCheckWrap = styled.div`
  position: absolute;
  top: 4px;
  right: 7px;
  height: 20px;
`;

export const Stepper = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    width: 12px;
    height: 8px;
    background: url('/images/icons/icon-stepper-arrow-up.svg') no-repeat center /
      cover;

    &:last-child {
      background: url('/images/icons/icon-stepper-arrow-down.svg') no-repeat
        center / cover;
    }
  }
`;
