// @ts-nocheck
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import PublishingRoute from './PublishingRoute';
import SubLayout from '../components/layout/SubLayout';
import routes from './publishroutedata';
import GuideList from 'pages/guide/GuideList';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubLayout />}>
          {routes.map(({path, element}) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="guidelist" element={<GuideList />} />
      </Routes>
      <PublishingRoute />
    </BrowserRouter>
  );
}
