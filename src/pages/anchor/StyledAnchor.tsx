// @ts-nocheck
import styled from 'styled-components';

export const NoticeBox = styled.div`
  background: #f7f7f7;
  width: 100%;
  padding: 20px;
  margin-top: 16px;
`;
export const NoticeFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & + & {
    margin-top: 20px;
  }
`;
export const StateFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StateTxt = styled.span`
  color: ${props => props.theme.color.text2};
  font-size: ${props => props.theme.fontSize.fontSize3};
`;

export const StateIcontype1 = styled.span`
  width: 58px;
  height: 20px;
  padding: 0px 6px 0px 6px;
  border-radius: 5px;
  margin-top: 6px;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  line-height: 20px;
  background: ${props => {
    switch (props.$status) {
      case 'connect':
        return '#5755ff';
      case 'disconnect':
        return '#868BA2';
      default:
        return '';
    }
  }};
`;

export const StateIcontype2 = styled.span`
  width: 25px;
  height: 25px;
  display: block;
  margin-top: 6px;
  background: ${props => {
    switch (props.$status) {
      case 'on':
        return 'url(/images/icons/wifi_on.svg) no-repeat center';
      case 'step3':
        return 'url(/images/icons/wifi_step3.svg) no-repeat center';
      case 'step2':
        return 'url(/images/icons/wifi_step2.svg) no-repeat center';
      case 'step1':
        return 'url(/images/icons/wifi_step1.svg) no-repeat center';
      case 'off':
        return 'url(/images/icons/wifi_off.svg) no-repeat center';
      default:
        return '';
    }
  }};
`;

export const StateIcontype3 = styled.span`
  width: 33px;
  height: 20px;
  padding: 0px 6px 0px 6px;
  border-radius: 5px;
  margin-top: 6px;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  line-height: 20px;
  background: ${props => {
    switch (props.$status) {
      case 'fine':
        return '#5755FF';
      case 'good':
        return '#7CC038';
      case 'nomal':
        return '#5B93FF';
      case 'low':
        return '#FEB63D';
      case 'bad':
        return '#FF5555';
      case 'none':
        return '#868BA2';
      default:
        return '#d3d3d3';
    }
  }};
`;

export const StateIcontype4 = styled.span`
  height: 20px;
  margin-top: 6px;
  color: #868ba2;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const StateIcontype5 = styled.span`
  height: 20px;
  padding: 0px 6px 0px 6px;
  border-radius: 5px;
  margin-top: 6px;
  background: ${props => {
    switch (props.$status) {
      case 'normal':
        return '#5755FF';
      case 'error':
        return '#ff5555';
      default:
        return '';
    }
  }};
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  line-height: 20px;
`;
