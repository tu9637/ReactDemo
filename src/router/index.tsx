import Demo from '@/page';
import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
const Ws = lazy(() => import("@/page/Ws"))
const routers: RouteObject[] = [
  { index: true, element: <Navigate to="/demo" />, path: '/' },
  {
    // path: '/',
    // children: [
    //   {
    path: '/content',
    element: <Ws></Ws>
    //   }
    // ]
  },
  {
    path: '/demo',
    element: <Demo></Demo>
  },
  {
    path: '*',
    element: '404'
  }
];
export default routers;
