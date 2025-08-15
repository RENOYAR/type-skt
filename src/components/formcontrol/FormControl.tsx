// @ts-nocheck
import React, {useState} from 'react';
import {
  FormControlWrap,
  FormControlItem,
  FormLabelWrap,
  FormControlLabel,
  RequiredDot,
  FormDetailHeader,
  FormIcon,
} from './StyledFormControl';

export default function FormControl({
  title,
  required,
  htmlFor,
  children,
  $detail,
  $row,
  $gapSmall,
  $gapLarge,
  $gapMini,
  $marginTop,
  disabled,
  $icon,
  $gapBig,
  $columnsTitleTop,
  $mtop,
  $none,
  $flex,
  $hcontent,
  $flexShow,
  $flexAlign,
  $padRight,
}) {
  return (
    <FormControlWrap
      $row={$row}
      $gapSmall={$gapSmall}
      $gapLarge={$gapLarge}
      $gapMini={$gapMini}
      $gapBig={$gapBig}
      $columnsTitleTop={$columnsTitleTop}
      $mtop={$mtop}
      $none={$none}
      $flex={$flex}
      $hcontent={$hcontent}>
      <FormLabelWrap
        $detail={$detail}
        $gapSmall={$gapSmall}
        $gapLarge={$gapLarge}
        $gapBig={$gapBig}
        $columnsTitleTop={$columnsTitleTop}>
        {!$detail ? (
          <FormControlLabel
            htmlFor={htmlFor}
            disabled={disabled}
            $icon={$icon}
            $none={$none}
            $flex={$flex}>
            {title}
            {required && <RequiredDot />}
            <FormIcon $icon={$icon} />
          </FormControlLabel>
        ) : (
          <FormDetailHeader>{title}</FormDetailHeader>
        )}
      </FormLabelWrap>
      <FormControlItem
        $detail={$detail}
        $marginTop={$marginTop}
        $padRight={$padRight}
        $flexAlign={$flexAlign}
        $flexShow={$flexShow}>
        {children}
      </FormControlItem>
    </FormControlWrap>
  );
}
