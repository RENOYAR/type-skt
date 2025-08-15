// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  position: relative;
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(${props => props.$columns || 1}, 1fr);
  gap: ${props => props.$gap || '12px 20px'};
  margin: ${props => props.margin || '0 auto'};
  width: ${props => props.width || '100%'};
`;

export default function Grid({children, $columns, $gap, margin, width}) {
  return (
    <GridContainer
      $columns={$columns}
      $gap={$gap}
      width={width}
      margin={margin}>
      {children}
    </GridContainer>
  );
}
