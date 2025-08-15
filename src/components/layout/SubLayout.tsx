import {Outlet} from 'react-router-dom';
import Layout from './Layout';
import Lnb from './Lnb';
import Footer from './Footer';

import {SubLayoutStyle, MainContent} from './StyledLayout';

export default function SubLayout() {
  return (
    <Layout>
      <Lnb />
      <SubLayoutStyle className="main-content-wrap">
        <MainContent>
          <Outlet />
        </MainContent>
      </SubLayoutStyle>
      <Footer />
    </Layout>
  );
}
