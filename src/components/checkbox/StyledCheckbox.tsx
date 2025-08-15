// @ts-nocheck
import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  margin: 0 5px;
`;

export const StyledCheckbox = styled.input`
  appearance: none;
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0;
  border: 1px solid ${props => props.theme.color.textDimed};
  border-radius: 2px;
  background-color: ${props => props.theme.color.white};
  background-repeat: no-repeat;
  background-size: contain;
  transition: all 150ms;

  &:checked {
    border: none;
    background-image: url('/images/icons/icon-check18.svg');
  }

  &:checked:hover {
    background-image: url('/images/icons/icon-hover.svg');
  }

  &:checked:disabled {
    border: none;
    background-image: url('/images/icons/icon-disabled.svg');
  }

  &:disabled {
    border: 1px solid #dbdde5;
    background-color: #f5f6fa;
  }
`;

export const StyledCheckBoxText = styled.span`
  margin-left: 9px;
  font-size: ${props => props.theme.fontSize.fontSize3};
  line-height: 20px;
  color: ${props =>
    props.disabled
      ? `${props.theme.color.textDimed}`
      : `${props.theme.color.gray8}`};
  font-weight: 400;
`;

export const CheckFlexWrap = styled.div`
  display: flex;
  align-items: ${props => (props.$start ? 'start' : 'center')};
  flex-direction: ${props => (props.$column ? 'column' : '')};
  gap: ${props => props.$gap || '8px'};
  width: ${props => (props.$width ? `calc(${props.$width})` : '100%')};
  & + & {
    margin-top: 12px;
  }

  & > div {
    flex: 1;
  }
`;
