import styled from 'styled-components';

export const FileUploderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  input {
    width: calc(100% - 90px);
    height: 32px;
    padding: 6px 10px;
    color: ${props => props.theme.color.text2};
    font-size: ${props => props.theme.fontSize.fontSize3};
    background-color: ${props => props.theme.color.white};
    border-radius: 4px;
    border: 1px solid ${props => props.theme.color.gray3};
  }
`;
