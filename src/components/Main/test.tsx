import React from 'react';
import { render } from '@testing-library/react';

import Main from '.';

test('renders Main component', () => {
  const { getByText } = render(<Main />);
  
  const introElement = getByText('Teste front-end');
  expect(introElement).toBeInTheDocument();
});
