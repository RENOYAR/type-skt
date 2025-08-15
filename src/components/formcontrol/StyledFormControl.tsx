// @ts-nocheck
import styled, {css} from 'styled-components';
// import IconForm from '/images/icons/icon-popover.svg';

export const FormControlWrap = styled.dl`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: ${props => (props.$row ? 'row' : 'column')};
  position: relative;
  padding-right: ${props => (props.$padRight ? '5px' : '0')};
  & + & {
    ${props => (props.$mtop ? 'margin-top: 10px' : 'margin-top: 30px')}
  }
  gap: ${props =>
    props.$gapMini
      ? '4px'
      : props.$gapSmall
      ? '6px'
      : props.$gapLarge
      ? '10px'
      : props.$gapBig
      ? '12px'
      : '8px'};

  ${props =>
    props.$columnsTitleTop &&
    css`
      flex-direction: column;
      row-gap: 12px;
    `}
`;

export const FormControlItem = styled.dd`
  display: ${props => (props.$flexShow ? 'flex' : '')};
  align-items: ${props => (props.$flexAlign ? 'flex-start' : '')};
  flex: ${props => (props.$ddFlex ? '2' : '1')};
  width: 100%;
  ${props =>
    props.$detail &&
    css`
      font-size: ${props => props.theme.fontSize.fontSize3};
      color: ${props => props.theme.color.text4};
      line-height: 20px;
      display: flex;
      align-items: center;
      min-height: 24px;

      img + .normal-text {
        margin-left: 8px;
      }
    `};
  margin-top: ${props => (props.$marginTop ? '6px' : '0')};
`;

export const FormLabelWrap = styled.dt`
  width: 220px;
  display: block;
  line-height: ${props =>
    props.$detail
      ? '24px'
      : props.$gapSmall
      ? '24px'
      : props.$gapLarge
      ? '24px'
      : props.$gapBig
      ? '24px'
      : '32px'};

  ${props =>
    props.$columnsTitleTop &&
    css`
      line-height: 24px;
    `}
`;

export const FormControlLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => (props.disabled ? '#A0A4B6' : '#434860')};
  margin-bottom: 6px;
`;

export const RequiredDot = styled.span`
  position: relative;
  color: #ff5555;
  &::after {
    content: '*';
    position: absolute;
    left: 2px;
    top: -7px;
    margin-left: 2px;
  }
`;

export const FormDetailHeader = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #434860;
`;

export const FormIcon = styled.div`
  display: ${props => (props.$icon ? 'inline-block' : 'none')};
  position: absolute;
  top: 6px;
  width: 20px;
  height: 20px;
  margin-left: 14px;
`;

export const FormFlexWrap = styled.div`
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

export const CircleNum = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.fontSize1};
  background-color: #4130df;
  border-radius: 50%;
`;

export const FormFlex = styled.span`
  display: inline-flex;
  width: 20px;
`;
