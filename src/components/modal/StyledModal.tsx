// @ts-nocheck
import styled from 'styled-components';
import closeIcon from '/images/icons/icon-close.svg';

export const Dim = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${props =>
    props.opacity ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.7)'};
  z-index: 100;
  ${props => (props.$oversize ? 'overflow-y: auto' : '')}
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: ${props => (props.$oversize ? '120px' : '50%')};
  ${props => props.$oversize && 'padding-top: 120px'};
  left: 50%;
  transform: ${props =>
    props.$oversize ? 'translate(-50%, 0)' : 'translate(-50%, -50%)'};
  z-index: 200;
`;

export const ModalBox = styled.div`
  position: relative;
  ${props => props.$oversize && 'bottom: 120px'};
  width: ${props => props.width};
  height: ${props => props.height};
  border: 1px solid ${props => props.theme.color.gray2};
  border-radius: 6px;
  background-color: ${props => props.theme.color.white};
`;

export const ModalClose = styled.button`
  position: absolute;
  right: 28px;
  top: ${props => (props.$modalData ? '24px' : '18px')};
  width: 24px;
  height: 24px;
  background: url(${closeIcon}) no-repeat;
`;

export const ModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: ${props =>
    props.$modalData ? '24px 32px 23px 32px' : '18px 32px 17px 32px'};
  font-size: ${props => props.theme.fontSize.fontSize6};
  line-height: 24px;
  color: #2d3145;
  font-weight: 600;
  border-bottom: 1px solid ${props => props.theme.color.gray2};
`;

export const ModalHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ModalHeaderFlex = styled.div`
  display: flex;
  align-items: center;
  padding-right: 38px;
`;

export const ModalGuide = styled.div`
  display: ${props => (props.$modalguide ? 'block' : 'none')};
  position: relative;
  margin-left: 19px;
  font-size: ${props => props.theme.fontSize.fontSize1};
  line-height: 20px;
  color: ${props => props.theme.color.gray7};

  &::before {
    content: '*';
    position: absolute;
    top: 0;
    left: -7px;
    font-size: ${props => props.theme.fontSize.fontSize1};
    line-height: 20px;
    color: ${props => props.theme.color.textError};
  }
`;

export const ModalData = styled.div`
  display: ${props => (props.$modalData ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  font-size: ${props => props.theme.fontSize.fontSize2};
  line-height: 20px;
  color: ${props => props.theme.color.text4};
  font-weight: 400;
`;

export const ModalContentWrapper = styled.div`
  overflow-y: ${props => (props.$noneOver ? 'unset' : 'auto')};
  height: ${props => props.$height};
  padding: 24px 31px 0 32px;
  margin-bottom: ${prosp => prosp.$marginBottom};
`;

export const ModalFooterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 64px);
  padding: 23px 0 30px 0;
  margin: 0 auto;
  border-top: ${props =>
    props.$borderNone ? 'none' : `1px solid ${props.theme.color.gray2}`};

  > button + button {
    margin-left: 8px;
  }
`;

export const ModalContentGrid = styled.div`
  display: grid;
`;
