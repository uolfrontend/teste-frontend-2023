import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders with default values', () => {
    const { getByText } = render(<Button />);
    const defaultText = getByText('label do botão');
    expect(defaultText).toBeInTheDocument();
  });

  test('renders with provided children', () => {
    const buttonText = 'Click Me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const renderedText = getByText(buttonText);
    expect(renderedText).toBeInTheDocument();
  });

  test('renders with different button type', () => {
    const { getByRole } = render(<Button buttonType={'secondary'} />);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveStyle('border: 1px solid #0070AB');
  });

  test('renders with different button size', () => {
    const { getByRole } = render(<Button size="small" />);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveStyle('font-size: 16px');
  });

  test('is clickable', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button handleClick={handleClick} />);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });

  test('is disabled', () => {
    const { getByRole } = render(<Button disabled={true} />);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
