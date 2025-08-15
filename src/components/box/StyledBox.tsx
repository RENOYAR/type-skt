import styled, {css} from 'styled-components';

interface BoxWrapProps {
  $widthSize?: string;
  $padDing?: string;
  $heightSize?: string;
  $marginRight?: string;
  $overFlow?: boolean; // overflow hidden 적용 여부
  $scroll?: boolean;
  $hcontent?: boolean; // hcontent 스타일 적용 여부
}

export const BoxWrap = styled.div<BoxWrapProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid ${props => props.theme.color.gray2};
  box-shadow: 15px 0px 10px -5px rgba(40, 46, 56, 0.03);
  ${({$widthSize}) => $widthSize || 'auto'};
  background: #ffffff;
  z-index: 10;
`;

export const BoxContent = styled.div<BoxWrapProps>`
  padding: ${({$padDing}) => ($padDing ? '0 5px 30px 30px' : '30px 30px 20px')};
  height: ${({$heightSize}) => ($heightSize ? 'calc(100% - 100px)' : '')};
  overflow: ${({$overFlow, $scroll}) =>
    $overFlow ? 'hidden' : $scroll ? 'scroll' : ''};
  margin-right: ${({$marginRight}) => ($marginRight ? '30px' : '')};

  ${({$hcontent}) =>
    $hcontent &&
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
