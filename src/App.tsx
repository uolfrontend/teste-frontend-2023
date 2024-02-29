import React from 'react';
import { RouterProvider } from 'react-router-dom';

import './Styles/Main.scss';

import routes from './routes';

function App() {
  return (
    <div className='main-app'>
      <main className='main'>
        <RouterProvider router={routes} />
      </main>
    </div>
  );
}

export default App;
