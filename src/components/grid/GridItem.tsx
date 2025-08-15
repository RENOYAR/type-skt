// @ts-nocheck
import styled from 'styled-components';

const GridItemContainer = styled.div`
  grid-column: ${props => props.$colStart || 'auto'} /
    ${props => props.$colEnd || 'auto'};

  gap: ${props => props.$gap || '0'};
`;

export default function GridItem({$colStart, $colEnd, children, $gap}) {
  return (
    <GridItemContainer $colStart={$colStart} $colEnd={$colEnd} $gap={$gap}>
      {children}
    </GridItemContainer>
  );
}
