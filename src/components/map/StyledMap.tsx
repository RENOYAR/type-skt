import styled from 'styled-components';

export const MapWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const CoordinateWrap = styled.div`
  position: fixed;
  width: 375px;
  height: 32px;
  bottom: 70px;
  right: 30px;
  border: 1px solid #4130df;
  background-color: #ffffff;
  box-shadow: 0px 4px 15px 0px #0000001a;
  border-radius: 4px;
`;

export const CoordinateDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CoordinateSpan = styled.div`
  display: inline-block;
  line-height: 32px;
  color: ${props => props.theme.color.gray8};
  font-size: ${props => props.theme.fontSize.fontSize3};
  font-weight: 600;
  margin-left: 10px;
`;
export const CoordinateNum = styled.div`
  display: inline-block;
  line-height: 32px;
  color: ${props => props.theme.color.textSub};
  font-size: ${props => props.theme.fontSize.fontSize3};
  font-weight: 500;
  margin-left: 10px;
`;
export const CoordinateUnit = styled.div`
  display: inline-block;
  line-height: 32px;
  color: ${props => props.theme.color.gray8};
  font-size: ${props => props.theme.fontSize.fontSize3};
  font-weight: 600;
  padding-left: 5px;
`;
export const MapCheckWrap = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  width: auto;
  height: 32px;
  background-color: #ffffff;
  border: 1px solid #c2c5d2;
  box-shadow: 0px 4px 15px 0px #0000001a;
  border-radius: 4px;
`;
export const MapCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 32px;
  margin: 0 5px;
  height: 30px;
`;
export const MapZommWrap = styled.div`
  position: fixed;
  right: 30px;
  bottom: 130px;
  width: 32px;
  height: 98px;
  border: 1px solid #c2c5d2;
  background-color: #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 4px 15px 0px #0000001a;
`;
export const MapZommBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MapZommCount = styled.div`
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-weight: 400;
  color: ${props => props.theme.color.text2};
  font-size: ${props => props.theme.fontSize.fontSize3};
`;

export const MapZommIn = styled.button`
  position: relative;
  height: 32px;
  border-radius: 0 0 4px 4px;
  padding: 6px 10px;
  box-sizing: border-box;
  border-top: 1px solid ${props => props.theme.color.gray3};

  &:hover {
    background-color: ${props => props.theme.color.gray1};s
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
    transform: translateX(0);
    width: 24px;
    height: 24px;
    background: url('/images/icons/icon-plus-24.svg') no-repeat;
  }

  &:disabled {
    background-color: ${props => props.theme.color.gray4};
    border: ${props => props.theme.color.gray4};
  }
`;

export const MapZommOut = styled.button`
  position: relative;
  height: 32px;
  border-radius: 0 0 4px 4px;
  padding: 6px 10px;
  box-sizing: border-box;
  border-top: 1px solid ${props => props.theme.color.gray3};

  &:hover {
    background-color: ${props => props.theme.color.gray1};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
    transform: translateX(0);
    width: 24px;
    height: 24px;
    background: url('/images/icons/icon-subtraction.svg') no-repeat;
  }
`;
