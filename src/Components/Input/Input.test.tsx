import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Input from './Input';

describe('Render Form Input Component', () => {
  test('render default input', async () => {
    render(<Input name='some-awesome-input' data-testid='inputid-test' />);

    const inputElement = screen.getByTestId('inputid-test');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.getAttribute('name')).toEqual('some-awesome-input');
    expect(inputElement).toHaveProperty('disabled', false);
  });

  test('render input with label', async () => {
    render(
      <Input
        name='some-awesome-input'
        label='Some description'
        data-testid='inputid-test'
      />,
    );

    const inputElement = screen.queryByText('Some description');
    expect(inputElement).toBeInTheDocument();
  });

  test('render disabled input', async () => {
    render(
      <Input name='some-awesome-input' disabled data-testid='inputid-test' />,
    );

    const inputElement = screen.getByTestId('inputid-test');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveProperty('disabled', true);
  });

  test('input type behaviour', async () => {
    render(<Input name='some-awesome-input' data-testid='inputid-test' />);

    const inputElement = screen.getByTestId('inputid-test') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'some info data' } });

    expect(inputElement.value).toBe('some info data');
    expect(inputElement.className).toMatch('hasValue');
  });
});
