import {useState, useRef, useEffect} from 'react';
import {
  LnbWrap,
  LnbHeader,
  LnbHeaderLogo,
  LnbBody,
  LnbList,
  LnbFooter,
  SidebarButton,
} from './StyledLayout';
import Icon from '../icon/Icon';
import {menuItemData} from './menuitemdata';
import LnbMenu from './LnbMenu';

export default function Lnb() {
  const LnbWrapRef = useRef<HTMLDivElement | null>(null);
  const [collapse, setCollapse] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(296);

  const handleClick = () => {
    setCollapse(prev => !prev);
    setSidebarWidth(prev => (prev === 296 ? 60 : 296));
  };

  useEffect(() => {
    const mainContentWrap = document?.querySelector(
      '.main-content-wrap',
    ) as HTMLElement | null;

    if (LnbWrapRef.current) {
      LnbWrapRef.current.style.width = `${sidebarWidth}px`;
    }

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
          {menuItemData?.map((data, index) => (
            <LnbMenu items={data} key={index} collapse={collapse} />
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
