import React from 'react';
import { ButtonProps } from './types';

const Button = ({
  children,
  disabled = false,
  size = 'md',
  variation = 'primary',
}: ButtonProps) => {
  return (
    <button
      className={`button ${variation} size-${size}`}
      disabled={disabled ?? undefined}
    >
      {children}
    </button>
  );
};

export default Button;
