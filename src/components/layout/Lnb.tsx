// @ts-nocheck
import {useState, useRef, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {
  LnbWrap,
  LnbHeader,
  LnbHeaderLogo,
  LnbBody,
  LnbList,
  LnbItem,
  LnbFooter,
  SidebarButton,
} from './StyledLayout';
import {Link} from 'react-router-dom';
import Icon from '../icon/Icon';
import {menuItemData} from './menuitemdata';
import LnbMenu from './LnbMenu';

export default function Lnb() {
  const LnbWrapRef = useRef();
  const [collapse, setCollapse] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(296);

  const handleClick = () => {
    setCollapse(!collapse);
    setSidebarWidth(!collapse ? 60 : 296);
  };

  useEffect(() => {
    const mainContentWrap = document?.querySelector('.main-content-wrap');
    LnbWrapRef.current.style.width = `${sidebarWidth}px`;

    if (sidebarWidth <= 296) {
      mainContentWrap?.setAttribute('style', `margin-left: ${sidebarWidth}px`);
    }

    if (sidebarWidth <= 60) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [sidebarWidth]);

  const iconSize = collapse ? 24 : 20;

  return (
    <LnbWrap ref={LnbWrapRef} className={`${collapse ? 'collapse ' : ''}`}>
      <LnbHeader>
        <LnbHeaderLogo className="lnb-logo" />
      </LnbHeader>
      <LnbBody className="lnb-wrap">
        <LnbList className="lnb-list">
          {menuItemData &&
            menuItemData.map((data, id) => (
              <LnbMenu items={data} key={id} collapse={collapse} />
            ))}
        </LnbList>
      </LnbBody>
      <LnbFooter className={`lnb-footer ${collapse ? 'collapse' : ''}`}>
        <Icon $widthSize={iconSize} $heightSize={iconSize} $name={'icon-out'} />
      </LnbFooter>
      <SidebarButton onClick={handleClick} />
    </LnbWrap>
  );
}
