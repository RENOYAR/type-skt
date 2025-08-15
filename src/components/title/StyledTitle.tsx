import styled from 'styled-components';

export const TitleWrap = styled.div`
  position: relative;
  padding: 30px 0;
  width: 100%;
  height: 74px;
  border-bottom: 1px solid ${props => props.theme.color.gray2};
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }
  h3 {
    color: ${props => props.theme.color.text1};
    font-size: ${props => props.theme.fontSize.fontSize6};
    font-weight: 600;
  }
`;
