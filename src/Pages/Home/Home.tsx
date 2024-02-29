import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Button from '../../Components/Button';

const Home = () => {
  return (
    <>
      <Link to='/customers'>
        <Button size='sm' variation='primary'>
          Exibir lista de Consumidores
        </Button>
      </Link>
      <Outlet />
    </>
  );
};

export default Home;
