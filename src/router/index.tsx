import Demo from '@/page';
import { RouteObject } from 'react-router-dom';
const routers: RouteObject[] = [
  { index: true, element: <Demo></Demo>, path: '/' },
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
    path: '/demo',
    element: <Demo></Demo>
  },
  {
    path: '/*',
    element: '404'
  }
];
export default routers;
