import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps<T = Element> extends ButtonHTMLAttributes<T> {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  variation?: 'primary' | 'secondary';
}
