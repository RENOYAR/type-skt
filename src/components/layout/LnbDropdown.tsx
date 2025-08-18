import {useLocation} from 'react-router-dom';
import Icon from 'components/icon/Icon';

interface Submenu {
  id: string | number;
  url: string;
  title: string;
}

interface LnbDropdownProps {
  submenus: Submenu[];
}

export default function LnbDropdown({submenus}: LnbDropdownProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul className="lnb-depth-list">
      {submenus?.map(submenu => (
        <li className="lnb-depth-item" key={submenu.id}>
          <a
            href="/"
            className={
              submenu.url === pathname
                ? 'lnb-depth-item-top active'
                : 'lnb-depth-item-top'
            }>
            <Icon
              $widthSize={20}
              $heightSize={20}
              $name={submenu.url === pathname ? 'icon-dot-active' : 'icon-dot'}
            />
            {submenu.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
