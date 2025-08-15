// @ts-nocheck
import {useState} from 'react';
import {Link} from 'react-router-dom';

import {
  DeleteButton,
  InputText,
  InputWrapper,
  SearchButton,
  ErrorMessage,
  VerifiedMessage,
  InnerRight,
  // AutoCompleteWrap,
  ValidCheckWrap,
  Stepper,
} from './StyledTextField';
import Icon from '../icon/Icon';

export default function TextField({
  type,
  id,
  name,
  placeholder,
  disabled,
  readOnly,
  $error,
  $search,
  $errorMessage,
  $verifiedMessage,
  $verified,
  $innerRight,
  $width,
  $height,
  value = '',
  $autoComplete,
  // list,
  textValidCheck,
  onMouseEnter,
  onMouseLeave,
  $stepper,
  $autoCompleteMenus,
  onBlur,
  onFocus,
  // $autoFocus,
  className,
}) {
  const [inputValue, setInputValue] = useState(value);
  // const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  // const [textList] = useState(list);
  const [menuList] = useState($autoCompleteMenus);
  // const [items, setItems] = useState([]);

  const handleChange = e => {
    setInputValue(e.target.value);

    // if ($autoComplete) {
    //   startTransition(() => {
    //     const newItems = textList.filter(l => l.includes(inputValue));
    //     setItems(newItems);
    //   });
    //   if (e.target.value.length >= 5) {
    //     setOpen(true);
    //   } else {
    //     setOpen(false);
    //   }
    // }
  };

  // const handleClick = (e, item) => {
  //   setInputValue(item);
  //   setOpen(false);
  //   const allItems = e.target.parentElement.querySelectorAll('.selected');
  //   allItems.forEach(el => el.classList.remove('selected'));
  //   e.target.classList.add('selected');
  // };

  const handleKeyDown = e => {
    if (e.keyCode === 13 && $autoComplete) {
      const elContent = document.querySelector(
        '.auto-complete-item.first-child',
      )?.textContent;
      setInputValue(elContent);
      setOpen(false);
    }
  };

  const handleMouseEnter = e => {
    onMouseEnter && onMouseEnter(e);
  };

  const handleMouseLeave = e => {
    onMouseLeave && onMouseLeave(e);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleStepperClick = e => {
    let count = inputValue;
    if (e === 'up') {
      count += 1;
    } else {
      count -= 1;

      if (count === 0) {
        count = 0;
      }
    }

    if (count <= 1) {
      count = 1;
    }
    setInputValue(count);
  };

  const handleBlur = e => {
    onBlur && onBlur(e);
  };

  const handleFocus = e => {
    onFocus && onFocus(e);
  };

  const handleHighlight = (targetText, targetValue) => {
    const searchText = targetText.toLowerCase();
    const searchValue = targetValue.toLowerCase();

    if (searchValue !== '' && searchText.includes(searchValue)) {
      const matchText = targetText.split(new RegExp(`(${searchValue})`, 'gi'));

      return (
        <>
          {matchText.map((text, index) =>
            text.toLowerCase() === searchValue.toLowerCase() ? (
              <span key={index} className="highlight">
                {text}
              </span>
            ) : (
              text
            ),
          )}
        </>
      );
    }

    return targetText;
  };

  return (
    <InputWrapper className={inputValue ? 'input-typing' : ''}>
      <InputText
        id={id}
        name={name}
        type={type}
        value={inputValue}
        $inputValue={inputValue}
        onChange={handleChange}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        $error={$error}
        $verified={$verified}
        $innerRight={$innerRight}
        $width={$width}
        $height={$height}
        onKeyDown={handleKeyDown}
        autoComplete={$autoComplete || $autoCompleteMenus ? 'off' : 'on'}
        onBlur={handleBlur}
        onFocus={handleFocus}
        // autoFocus={$autoFocus}
        className={className}
      />
      {inputValue &&
        !disabled &&
        !readOnly &&
        !$innerRight &&
        !textValidCheck && (
          <DeleteButton
            onClick={handleClear}
            $search={$search}
            $errorMessage={$errorMessage}
            $verifiedMessage={$verifiedMessage}
            $stepper={$stepper}
            className="delete-button"
          />
        )}
      {$search && (
        <SearchButton
          $search={$search}
          disabled={disabled}
          readOnly={readOnly}
          $inputValue={inputValue}
          className="search-button"
        />
      )}
      {$error && $errorMessage && (
        <ErrorMessage>
          <span>{$errorMessage}</span>
        </ErrorMessage>
      )}
      {$verified && $verifiedMessage && (
        <VerifiedMessage>
          <span>{$verifiedMessage}</span>
        </VerifiedMessage>
      )}
      {$innerRight && (
        <InnerRight
          // $inputValue={inputValue}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          className={`inner-right-text ${
            $errorMessage && 'inner-right-error'
          }`}>
          {$innerRight}
        </InnerRight>
      )}
      {textValidCheck && (
        <ValidCheckWrap
          className={`valid-check-wrap ${
            textValidCheck === 'valid' ? 'valid' : 'invalid'
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <Icon
            $name={`icon-check-${
              textValidCheck === 'valid' ? 'valid' : 'invalid'
            }`}
            $widthSize={20}
            $heightSize={20}>
            {textValidCheck === 'valid' ? '유효' : '불가'}
          </Icon>
        </ValidCheckWrap>
      )}
      {/* {$autoComplete && (
        <AutoCompleteWrap className={`${open ? 'open' : ''}`}>
          <ul className="auto-complete-list">
            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`auto-complete-item ${
                    index === 0 ? 'first-child' : ''
                  }`}
                  onClick={e => handleClick(e, item)}>
                  {item}
                </li>
              );
            })}
            {items.length <= 0 && !isPending && (
              <li style={{fontSize: '14px'}}>No result</li>
            )}
          </ul>
        </AutoCompleteWrap>
      )} */}
      {$stepper && (
        <Stepper className="stepper">
          <button
            type="button"
            onClick={() => handleStepperClick('up')}></button>
          <button
            type="button"
            onClick={() => handleStepperClick('down')}></button>
        </Stepper>
      )}
      {$autoCompleteMenus && (
        <div className={`menu-search-list ${open ? 'open' : ''}`}>
          {menuList.map(menu => {
            return (
              <Link to="#" className="menu-search-item" key={menu.id}>
                <div className="menu-search-item__top">
                  {menu.depth} / {menu.subDepth}
                </div>
                <div className="menu-search-item__bottom">
                  {handleHighlight(menu.menuName, inputValue)}
                  <Icon
                    $widthSize={20}
                    $heightSize={20}
                    $name="icon-arrow-right-20">
                    오른쪽 화살표
                  </Icon>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </InputWrapper>
  );
}
