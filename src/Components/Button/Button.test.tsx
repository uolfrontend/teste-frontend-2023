import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Render Button Component', () => {
  test('renders default button component', () => {
    const label = 'Some Text Label';
    render(<Button>{label}</Button>);

    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveProperty('disabled', false);
    expect(buttonElement.className).toBe('button primary size-md');
  });

  test('render disabled button', async () => {
    render(<Button disabled>Clickable Button</Button>);

    const buttonElement = await screen.findByRole('button');
    expect(buttonElement).toHaveProperty('disabled', true);
  });

  test('render secondary variation button', async () => {
    render(<Button variation='secondary'>Clickable Button</Button>);

    const buttonElement = await screen.findByRole('button');
    expect(buttonElement.className).toMatch(/button secondary/i);
  });

  test('render button sizes', async () => {
    const { rerender } = render(<Button size='sm'>Clickable Button</Button>);

    const buttonElement = await screen.findByRole('button');
    expect(buttonElement.className).toMatch(/size-sm/i);

    rerender(<Button size='md'>Clickable Button</Button>);
    expect(buttonElement.className).toMatch(/size-md/i);

    rerender(<Button size='lg'>Clickable Button</Button>);
    expect(buttonElement.className).toMatch(/size-lg/i);
  });
});
