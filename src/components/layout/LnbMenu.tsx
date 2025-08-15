// @ts-nocheck
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {LnbItem} from './StyledLayout';
import {Link} from 'react-router-dom';
import Icon from '../icon/Icon';
import LnbDropdown from './LnbDropdown';

export default function LnbMenu({items, collapse}) {
  const [isActive, setIsActive] = useState(false);
  const [hover, setHover] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const handleDepth = e => {
    setIsActive(!isActive);
    e.currentTarget.classList.toggle('active');
  };
  const MouseOver = () => {
    setHover(true);
  };
  const MouseOut = () => {
    setHover(false);
  };
  const iconSize = collapse ? 24 : 20;

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <LnbItem>
      {items.submenu ? (
        <>
          <div
            className="lnb-item-left"
            onClick={handleDepth}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}>
            <Link to="#dashboard">
              <Icon
                $widthSize={iconSize}
                $heightSize={iconSize}
                $name={
                  items.url === pathname
                    ? `${items.icon}-active`
                    : `${items.icon}`
                }
              />
              {!collapse && (
                <span
                  className={`text-overflow ${
                    items.url === pathname ? 'active' : ''
                  }`}>
                  {items.title}
                </span>
              )}
            </Link>
            {!collapse && (
              <Icon $widthSize={16} $heightSize={16} $name="icon-plus-16" />
            )}
          </div>
          <LnbDropdown submenus={items.submenu} />
        </>
      ) : (
        <div
          className="lnb-item-left"
          onClick={handleActive}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}>
          <Link to="#dashboard">
            <Icon
              $widthSize={iconSize}
              $heightSize={iconSize}
              $name={
                items.url === pathname
                  ? `${items.icon}-active`
                  : `${items.icon}`
              }
            />
            {!collapse && (
              <span
                className={`text-overflow ${
                  items.url === pathname ? 'active' : ''
                }`}>
                {items.title}
              </span>
            )}
          </Link>
        </div>
      )}
    </LnbItem>
  );
}
