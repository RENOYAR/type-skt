import styled from 'styled-components';

interface BoxWrapProps {
  $width?: string;
  $padDing?: string;
  $heightSize?: string;
  $marginRight?: string;
  $overFlow?: boolean; // overflow hidden 적용 여부
  $scroll?: boolean;
  $hcontent?: boolean; // hcontent 스타일 적용 여부
}

export const ButtonStyle = styled.button<BoxWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  gap: 6px;
  color: ${props => props.theme.color.white};
  width: ${props => (props.$width ? props.$width + 'px' : 'auto')};
  margin: 0;
  line-height: 20px;
  font-weight: 500;
  border-radius: 4px;

  transition: all 150ms;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.button`
  padding: 0;
  > img {
    vertical-align: top;
  }
`;
