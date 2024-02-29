import { createBrowserRouter } from 'react-router-dom';

import { customersLoader } from './Services/Http/Loaders';

import Home from './Pages/Home';
import Customers from './Pages/Customers';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'customers',
        element: <Customers />,
        loader: customersLoader,
      },
    ],
  },
]);

export default routes;
