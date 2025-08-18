import {useState} from 'react';
import Icon from '../icon/Icon';
import {StyledPagination, PaginationNavButton} from './StyledPagination';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 10;
  return (
    <StyledPagination>
      <PaginationNavButton>
        <Icon
          $widthSize={20}
          $heightSize={20}
          $name={`icon-paging-arrow-first${
            currentPage === 0 ? '-disabled' : ''
          }`}>
          처음으로
        </Icon>
      </PaginationNavButton>
      <PaginationNavButton>
        <Icon
          $widthSize={20}
          $heightSize={20}
          $name={`icon-paging-arrow-${
            currentPage === 0 ? 'left-disabled' : 'left'
          }`}>
          이전
        </Icon>
      </PaginationNavButton>
      <button type="button" className="paging active">
        1
      </button>
      <button
        type="button"
        className={currentPage ? 'paging active' : 'paging'}>
        2
      </button>
      <button
        type="button"
        className={currentPage ? 'paging active' : 'paging'}>
        3
      </button>
      <button
        type="button"
        className={currentPage ? 'paging active' : 'paging'}>
        4
      </button>
      <button
        type="button"
        className={currentPage ? 'paging active' : 'paging'}>
        5
      </button>
      <PaginationNavButton>
        <Icon
          $widthSize={20}
          $heightSize={20}
          $name={`icon-paging-arrow-${
            currentPage + 1 === totalPages ? 'right-disabled' : 'right'
          }`}>
          다음
        </Icon>
      </PaginationNavButton>
      <PaginationNavButton>
        <Icon
          $widthSize={20}
          $heightSize={20}
          $name={`icon-paging-arrow-last${
            currentPage + 1 === totalPages ? '-disabled' : ''
          }`}>
          마지막으로
        </Icon>
      </PaginationNavButton>
    </StyledPagination>
  );
}
