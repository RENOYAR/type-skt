// @ts-nocheck
import styled from 'styled-components';

export const TableWrap = styled.div`
  position: relative;
  margin-top: ${props => (props.$marginTop ? '30px' : '0')};
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    thead {
      border-top: 1px solid ${props => props.theme.color.gray3};
      border-bottom: 1px solid ${props => props.theme.color.gray3};
      display: ${props => (props.$table ? '' : 'table')};
      width: 100%;
      th {
        padding: ${props =>
          props.$paddIngTh
            ? '14px 10px'
            : props.$paddIngT
            ? '14px 5px'
            : props.$paddIngN
            ? '0px 0px'
            : '13px 10px'};
        color: ${props => props.theme.color.text1};
        font-weight: 600;
        font-size: ${props => props.theme.fontSize.fontSize2};
        background-color: #f5f6fa;
        width: auto;
        vertical-align: ${props => (props.$valign ? 'middle' : '')};
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        height: ${props => (props.$height ? '44px' : '')};
      }
    }

    tbody {
      display: ${props => (props.$block ? '' : 'block')};
      overflow-y: auto;
      overflow-x: hidden;
      max-height: ${props => (props.$bodyHeight ? '620px' : '')};
      width: 100%;

      tr {
        display: ${props => (props.$tabletr ? '' : 'table')};
        width: 100%;
        table-layout: fixed;

        &:hover td {
          background-color: #f5f7ff;
        }

        td {
          padding: ${props =>
            props.$paddIngTb
              ? '13.5px 10px'
              : props.$paddIngImg
              ? '9px 10px'
              : props.$paddIngCke
              ? '11px 10px'
              : props.$paddIngT
              ? '14px 5px'
              : '11px 10px'};
          text-align: center;
          color: ${props => props.theme.color.text2};
          font-size: ${props => props.theme.fontSize.fontSize3};
          border-bottom: 1px solid ${props => props.theme.color.gray1};
          width: auto;
          vertical-align: ${props => (props.$valign ? 'middle' : '')};
          white-space: nowrap;
          vertical-align: middle;

          a .icon {
            position: relative;
            top: -2px;
          }
          span.bad {
            color: #ff5555;
          }
          span.good {
            color: #455dd7;
          }
          span.wifi_on {
            display: block;
            background: url('/images/icons/wifi_on.svg') no-repeat center;
            width: 100%;
            height: 25px;
          }
          span.wifi_off {
            display: block;
            background: url('/images/icons/wifi_off.svg') no-repeat center;
            width: 100%;
            height: 25px;
          }
        }
      }
    }
  }
`;
