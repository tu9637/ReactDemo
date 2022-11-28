import { RouteObject } from 'react-router-dom';
import Demo from '../page/index';
const routers: RouteObject[] = [
  { index: true, element: '重定向', path: '/' },
  {
    path: '/',
    children: [
      {
        path: 'content',
        element: '这是页面'
      }
    ]
  },
  {
    path: '/contact',
    element: <Demo></Demo>
  },
  {
    path: '/*',
    element: '404'
  }
];
export default routers;
