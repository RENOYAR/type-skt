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
  border: 1px solid ${({theme}) => theme.color.textDimed};
  border-radius: 2px;
  background-color: ${({theme}) => theme.color.white};
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

interface StyledCheckBoxTextProps {
  $disabled?: boolean;
}

export const StyledCheckBoxText = styled.span<StyledCheckBoxTextProps>`
  margin-left: 9px;
  font-size: ${({theme}) => theme.fontSize.fontSize3};
  line-height: 20px;
  color: ${({$disabled, theme}) =>
    $disabled ? theme.color.textDimed : theme.color.gray8};
  font-weight: 400;
`;

interface CheckFlexWrapProps {
  $start?: boolean;
  $column?: boolean;
  $gap?: string;
  $width?: string;
}

export const CheckFlexWrap = styled.div<CheckFlexWrapProps>`
  display: flex;
  align-items: ${({$start}) => ($start ? 'start' : 'center')};
  flex-direction: ${({$column}) => ($column ? 'column' : '')};
  gap: ${({$gap}) => $gap || '8px'};
  width: ${({$width}) => ($width ? `calc(${$width})` : '100%')};

  & + & {
    margin-top: 12px;
  }

  & > div {
    flex: 1;
  }
`;
