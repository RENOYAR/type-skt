// @ts-nocheck
import React from 'react';
import {FormFlexWrap} from './StyledFormControl';

export default function FormFlex({children, $gap, $width, $column, $start}) {
  return (
    <FormFlexWrap $gap={$gap} $width={$width} $column={$column} $start={$start}>
      {children}
    </FormFlexWrap>
  );
}
