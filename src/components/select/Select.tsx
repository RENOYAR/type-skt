// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {components} from 'react-select';
import {
  MenuFooter,
  SelectStyle,
  ArrowButton,
  ErrorMessage,
} from './StyledSelect';
import Button from 'components/button/Button';
import CustomInput from './CustomInput';
import CustomOption from './CustomOption';
import DefaultOption from './DefaultOption';

export default function Select({
  placeholder,
  isMulti,
  hideSelectedOptions,
  className,
  classNamePrefix,
  defaultValue,
  disabled,
  inputId,
  name,
  readonly,
  $transparent,
  $button,
  $checkbox,
  onChange,
  value,
  $all,
  $height,
  menuPortalTarget,
  $error,
  $errorMessage,
  $innerRight,
  ...props
}) {
  const [selectedOptions, setSelectedOptions] = useState(
    value || defaultValue || [],
  );

  useEffect(() => {
    if (value !== undefined) {
      setSelectedOptions(value);
    }
  }, [value]);

  const [isOpen, setIsOpen] = useState(false);

  const allOption = {value: '*', label: '전체'};
  const optionsWithAll = $all ? [allOption, ...props.options] : props.options;

  const handleChange = selected => {
    const selectionArray = Array.isArray(selected) ? selected : [selected];
    if (selectionArray.some(option => option.value === allOption.value)) {
      const allSelected = selectedOptions.length === props.options.length;
      const newSelectedOptions = allSelected ? [] : [...props.options];
      setSelectedOptions(newSelectedOptions);
      onChange && onChange(newSelectedOptions);
    } else {
      setSelectedOptions(selectionArray);
      onChange && onChange(selectionArray);
    }

    if (!isMulti) {
      handleMenuClose();
    }
  };

  const handleApply = () => {
    onChange && onChange(selectedOptions);
    handleMenuClose();
  };

  const handleReset = () => {
    setSelectedOptions([]);
    onChange && onChange([]);
    handleMenuClose();
  };

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      <ArrowButton $isOpen={isOpen} />
    </components.DropdownIndicator>
  );

  const Menu = props => (
    <components.Menu {...props}>
      {props.children}
      <MenuFooter $button={$button}>
        <Button onClick={handleReset} $size="small" $variant="transparent">
          초기화
        </Button>
        <Button
          onClick={handleApply}
          $size="small"
          $variant="transparentPurple">
          적용
        </Button>
      </MenuFooter>
    </components.Menu>
  );

  return (
    <div>
      <SelectStyle
        {...props}
        inputId={inputId}
        name={name}
        placeholder={placeholder}
        isMulti={isMulti}
        closeMenuOnSelect={!isMulti}
        options={optionsWithAll}
        hideSelectedOptions={hideSelectedOptions}
        className={`${className || ''}`}
        classNamePrefix={classNamePrefix}
        defaultValue={defaultValue}
        isDisabled={disabled}
        menuIsOpen={isOpen}
        menuPortalTarget={menuPortalTarget}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        readonly={readonly}
        $transparent={$transparent}
        $height={$height}
        components={{
          DropdownIndicator,
          Input: CustomInput,
          Option: $checkbox ? CustomOption : DefaultOption,
          Menu: Menu,
          ...props.components,
        }}
        value={selectedOptions}
        onChange={handleChange}
        $error={$error}
      />
      {$error && $errorMessage && (
        <ErrorMessage>
          <span>{$errorMessage}</span>
        </ErrorMessage>
      )}
      {$innerRight && (
        <div
          className={`inner-right-text ${
            $errorMessage && 'inner-right-error'
          }`}>
          {$innerRight}
        </div>
      )}
    </div>
  );
}
