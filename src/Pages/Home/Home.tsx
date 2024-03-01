import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Button from '../../Components/Button';

const Home = () => {
  return (
    <>
      <header className='page-header'>
        <Link to='/customers'>
          <Button size='sm' variation='primary'>
            Exibir lista de Consumidores
          </Button>
        </Link>
      </header>
      <div className='page-content'>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
