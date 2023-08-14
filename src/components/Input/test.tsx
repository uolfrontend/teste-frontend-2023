import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Input from '.';

describe('Input Component', () => {
  test('renders with default values', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('#finput') as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
  });

  test('handles onBlur and onFocus events', () => {
    const { getByTestId } = render(<Input />);
    const inputElement = getByTestId('input-element') as HTMLInputElement;

    fireEvent.focus(inputElement);

    fireEvent.blur(inputElement);

    expect(document.activeElement).not.toBe(inputElement);
  });
});
