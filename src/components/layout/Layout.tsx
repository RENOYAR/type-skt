import {ReactNode} from 'react';
import {LayoutWrap} from './StyledLayout';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return <LayoutWrap>{children}</LayoutWrap>;
}
