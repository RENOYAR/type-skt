// @ts-nocheck
import {useLocation} from 'react-router-dom';
import Icon from 'components/icon/Icon';

export default function LnbDropdown({submenus}) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul className="lnb-depth-list">
      {submenus &&
        submenus.map((submenu, id) => (
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
                $name={
                  submenu.url === pathname ? 'icon-dot-active' : 'icon-dot'
                }
              />
              {submenu.title}
            </a>
          </li>
        ))}
    </ul>
  );
}
