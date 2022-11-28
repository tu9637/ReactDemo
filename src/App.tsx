import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routers from './router';
import styles from './styles/App.module.less';
function App() {
  return (
    <div className={styles.App}>
      <Suspense fallback="努力加载中">
        <RouterProvider router={createBrowserRouter(routers)} fallbackElement="加载中" />
      </Suspense>
    </div>
  );
}

export default App;
