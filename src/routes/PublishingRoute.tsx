// @ts-nocheck
import {Route, Routes} from 'react-router-dom';
import PublishingList from 'pages/PublishingList';
import publishdata from 'pages/guide/publishdata';
import routes from './publishroutedata';

export default function PublishingRoute() {
  return (
    <Routes>
      <Route
        path="publishinglist/*"
        element={<PublishingList data={publishdata} />}></Route>
      {routes.map(({path, element}) => (
        <Route key={path} path={`/sub/${path}`} element={element} />
      ))}
    </Routes>
  );
}
