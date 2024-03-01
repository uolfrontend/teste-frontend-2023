import { InputHTMLAttributes } from 'react';

export interface InputProps<T = Element> extends InputHTMLAttributes<T> {
  label?: string;
  name: string;
  placeholder?: string;
}
