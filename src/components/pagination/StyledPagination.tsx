import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  gap: 8px;
  .paging {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme.color.text3};
    border-radius: 50%;
    &.active {
      color: ${props => props.theme.color.primary};
      background-color: rgba(98, 31, 255, 0.05);
    }
    &:hover:not(.active) {
      background-color: ${props => props.theme.color.gray1};
    }
    &:active:not(.active) {
      background-color: #eaebed;
    }
  }
`;

export const PaginationNavButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    background-color: ${props => props.theme.color.gray1};
  }

  &:active {
    background-color: #eaebed;
  }
`;
