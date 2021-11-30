import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import NotFound from './pages/Page404';
import Home from './pages/Home';
import ChartTransportation from './pages/ChartTransportation';
import ChartCulture from './pages/ChartCulture';
import ChartConsumption from './pages/ChartConsumption';
import ChartLiving from './pages/ChartLiving';



// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/home" replace /> },
        { path: 'home', element: <Home /> },
        { path: 'transportation', element: <ChartTransportation /> },
        { path: 'culture', element: <ChartCulture /> },
        { path: 'consumption', element: <ChartConsumption /> },
        { path: 'living', element: <ChartLiving /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
