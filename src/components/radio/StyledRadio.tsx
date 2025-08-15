// @ts-nocheck
import styled from 'styled-components';

export const RadioboxWrapper = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  margin-right: 20px;
`;

export const StyledRadio = styled.input`
  appearance: none;
  display: inline-block;
  position: relative;
  width: ${props => (props.$large ? '20px' : '16px')};
  height: ${props => (props.$large ? '20px' : '16px')};
  margin: 0;
  border: 1px solid #caccd7;
  border-radius: 50%;
  background-color: ${props => props.theme.color.white};
  background-repeat: no-repeat;
  background-size: contain;
  transition: all 150ms;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => (props.$large ? '10px' : '8px')};
    height: ${props => (props.$large ? '10px' : '8px')};
    border-radius: 50%;
    background-color: ${props => props.theme.color.primary};
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:checked {
    border: 1px solid ${props => props.theme.color.primary};
    &:after {
      opacity: 1;
    }
  }

  &:checked:hover {
    opacity: 0.6;
  }

  &:checked:disabled {
    border: 1px solid ${props => props.theme.color.gray4};
    opacity: 1;

    &:after {
      background-color: ${props => props.theme.color.gray4};
    }
  }

  &:disabled {
    border: 1px solid #dbdde5;
    background-color: #f5f6fa;
  }
`;

export const StyledRadioBoxText = styled.span`
  margin-left: 8px;
  font-size: ${props => props.theme.fontSize.fontSize3};
  line-height: 20px;
  color: ${props =>
    props.disabled
      ? `${props.theme.color.textDimed}`
      : `${props.theme.color.gray8}`};
  font-weight: 400;
`;

export const RadioboxFlex = styled.span`
  display: flex;
  margin-top: 5px;
`;
