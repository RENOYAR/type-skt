// @ts-nocheck
import styled, {css} from 'styled-components';

export const BoxWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid ${props => props.theme.color.gray2};
  box-shadow: 15px 0px 10px -5px rgba(40, 46, 56, 0.03);
  ${props =>
    props.$widthSize &&
    css`
      width: ${props.$widthSize}px;
    `};
  background: #ffffff;
  z-index: 10;
`;

export const BoxContent = styled.div`
  padding: ${props => (props.$padDing ? '0 5px 30px 30px' : '30px 30px 20px')};
  height: ${props => (props.$heightSize ? 'calc(100% - 100px)' : '')};
  overflow: ${props =>
    props.$overFlow ? 'hidden' : props.$scroll ? 'scroll' : ''};
  margin-right: ${props => (props.$marginRight ? '30px' : '')};
  ${props =>
    props.$hcontent &&
    css`
      max-height: calc(100% - 150px);
      overflow-y: auto;
    `}
`;

export const BoxContainer = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  z-index: 1;
`;
